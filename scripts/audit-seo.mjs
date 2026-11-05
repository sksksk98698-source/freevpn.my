import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve(process.cwd(), "dist");

function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath));
    } else if (file.endsWith(".html")) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = getAllHtmlFiles(distDir);
console.log(`Auditing ${htmlFiles.length} HTML pages in dist...`);

// Data structures for audit findings
const issues = {
  P0: [],
  P1: [],
  P2: [],
  info: [],
};

const urlCanonicalMap = new Map();
const titlesMap = new Map();
const descriptionsMap = new Map();
const internalLinks = new Set();
const externalLinks = [];
const localPathLeaks = [];
const oldBrandLeaks = [];
const wordCountStats = [];
const schemaIssues = [];

const siteDomain = "https://freevpn.my";

for (const filePath of htmlFiles) {
  const relPath = path.relative(distDir, filePath).replace(/\\/g, "/");
  const content = fs.readFileSync(filePath, "utf-8");

  // Determine expected public URL
  let pageUrl = "";
  if (relPath === "index.html") {
    pageUrl = `${siteDomain}/`;
  } else if (relPath.endsWith("/index.html")) {
    pageUrl = `${siteDomain}/${relPath.replace(/\/index\.html$/, "")}`;
  } else {
    pageUrl = `${siteDomain}/${relPath.replace(/\.html$/, "")}`;
  }

  // 1. Check Canonical
  const canonicalMatch =
    content.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i) ||
    content.match(/<link[^>]+href="([^"]+)"[^>]+rel="canonical"/i);
  if (!canonicalMatch) {
    issues.P1.push({
      page: pageUrl,
      type: "Missing Canonical",
      detail: `Page ${relPath} lacks a canonical link tag.`,
    });
  } else {
    const canonicalHref = canonicalMatch[1];
    urlCanonicalMap.set(pageUrl, canonicalHref);
    if (!canonicalHref.startsWith("https://freevpn.my")) {
      issues.P0.push({
        page: pageUrl,
        type: "Non-production Canonical Host",
        detail: `Canonical points to ${canonicalHref} instead of https://freevpn.my`,
      });
    }
  }

  // 2. Title & Description
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : "";
  if (title) {
    if (!titlesMap.has(title)) titlesMap.set(title, []);
    titlesMap.get(title).push(pageUrl);
  } else {
    issues.P1.push({
      page: pageUrl,
      type: "Missing Title",
      detail: "No <title> found.",
    });
  }

  const descMatch =
    content.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i) ||
    content.match(/<meta[^>]+content="([^"]*)"[^>]+name="description"/i);
  const desc = descMatch ? descMatch[1].trim() : "";
  if (desc) {
    if (!descriptionsMap.has(desc)) descriptionsMap.set(desc, []);
    descriptionsMap.get(desc).push(pageUrl);
  } else {
    issues.P1.push({
      page: pageUrl,
      type: "Missing Meta Description",
      detail: "No description found.",
    });
  }

  // 3. Check for Local Path Leaks & Old Brand
  const localMatch =
    content.match(/C:[\/\\]Users[\/\\][^\s"'>]+/i) ||
    content.match(/127\.0\.0\.1:4321/i) ||
    content.match(/localhost:4321/i);
  if (localMatch) {
    localPathLeaks.push({ page: pageUrl, leak: localMatch[0] });
    issues.P0.push({
      page: pageUrl,
      type: "Local Path / Dev Host Leak",
      detail: `Contains raw path or dev port: ${localMatch[0]}`,
    });
  }

  const oldBrandMatch =
    content.match(/Domus\s*Picturae/i) || content.match(/mearashadowfax/i);
  if (oldBrandMatch) {
    oldBrandLeaks.push({ page: pageUrl, brand: oldBrandMatch[0] });
    issues.P2.push({
      page: pageUrl,
      type: "Template Footprint Residue",
      detail: `Contains upstream template text: "${oldBrandMatch[0]}"`,
    });
  }

  // 4. Check External Links & rel attributes
  const linkMatches = content.matchAll(/<a\s+[^>]*href="([^"]+)"[^>]*>/gi);
  for (const m of linkMatches) {
    const fullTag = m[0];
    const href = m[1];

    if (href.startsWith("http://") || href.startsWith("https://")) {
      const isInternal =
        href.startsWith("https://freevpn.my") ||
        href.startsWith("http://127.0.0.1:4321");
      if (!isInternal) {
        // External link
        const relMatch = fullTag.match(/rel="([^"]+)"/i);
        const relVal = relMatch ? relMatch[1] : "";
        const isCommercial =
          href.includes("aff") ||
          href.includes("code=") ||
          href.includes("gsyvipaff") ||
          href.includes("sahude");

        externalLinks.push({ page: pageUrl, href, rel: relVal, isCommercial });

        if (isCommercial) {
          if (!relVal.includes("nofollow") || !relVal.includes("sponsored")) {
            issues.P0.push({
              page: pageUrl,
              type: "Commercial Link Missing nofollow/sponsored",
              detail: `Commercial affiliate URL ${href} lacks nofollow or sponsored: <a ${fullTag}>`,
            });
          }
        }
      } else {
        internalLinks.add(
          href
            .replace("http://127.0.0.1:4321", "")
            .replace("https://freevpn.my", ""),
        );
      }
    } else if (href.startsWith("/")) {
      internalLinks.add(href);
    }
  }

  // 5. Word Count (stripped text)
  const bodyText = content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const charLength = bodyText.length;
  wordCountStats.push({ page: pageUrl, length: charLength });
  if (
    charLength < 800 &&
    !pageUrl.includes("404") &&
    !pageUrl.endsWith("robots.txt")
  ) {
    issues.P1.push({
      page: pageUrl,
      type: "Thin Content (<800 chars)",
      detail: `Page text length is only ${charLength} characters.`,
    });
  }

  // 6. JSON-LD Verification
  const jsonLdMatches = content.matchAll(
    /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
  );
  for (const jm of jsonLdMatches) {
    try {
      const parsed = JSON.parse(jm[1]);
      if (!parsed["@context"] || !parsed["@type"]) {
        schemaIssues.push({
          page: pageUrl,
          issue: "Missing @context or @type",
        });
      }
    } catch (e) {
      schemaIssues.push({
        page: pageUrl,
        issue: `JSON parse error: ${e.message}`,
      });
      issues.P1.push({
        page: pageUrl,
        type: "Invalid JSON-LD",
        detail: `JSON parse error on ${pageUrl}: ${e.message}`,
      });
    }
  }
}

// Check for broken internal links
const brokenLinks = [];
for (const link of internalLinks) {
  // Normalize link path
  let cleanLink = link.split("?")[0].split("#")[0];
  if (!cleanLink || cleanLink === "/") continue;
  if (cleanLink.endsWith("/")) cleanLink = cleanLink.slice(0, -1);

  // Check if dist/<cleanLink>.html or dist/<cleanLink>/index.html exists
  const htmlPath1 = path.join(distDir, `${cleanLink}.html`);
  const htmlPath2 = path.join(distDir, cleanLink, "index.html");

  if (!fs.existsSync(htmlPath1) && !fs.existsSync(htmlPath2)) {
    brokenLinks.push(cleanLink);
  }
}

// Summary Report
console.log("\n================ AUDIT SUMMARY ================");
console.log(`Total Pages Scanned: ${htmlFiles.length}`);
console.log(`P0 Critical Issues: ${issues.P0.length}`);
console.log(`P1 High Risk Issues: ${issues.P1.length}`);
console.log(`P2 Warning/Optimization: ${issues.P2.length}`);
console.log(`Broken Internal Links: ${brokenLinks.length}`);
console.log(`Local Path Leaks: ${localPathLeaks.length}`);
console.log(`Old Brand Leaks: ${oldBrandLeaks.length}`);

console.log("\n--- Broken Internal Links Found ---");
console.log(brokenLinks.slice(0, 10));

console.log("\n--- P0 Issues ---");
console.log(issues.P0);

console.log("\n--- Duplicate Titles (>1 page) ---");
const dupTitles = Array.from(titlesMap.entries()).filter(
  ([t, p]) => p.length > 1,
);
console.log(`Duplicate title groups: ${dupTitles.length}`);
for (const [t, p] of dupTitles.slice(0, 5)) {
  console.log(`Title: "${t}" on ${p.length} pages:`, p);
}

console.log("\n--- Word Count Stats ---");
wordCountStats.sort((a, b) => a.length - b.length);
console.log("5 Shortest Pages:", wordCountStats.slice(0, 5));
console.log("5 Longest Pages:", wordCountStats.slice(-5));

fs.writeFileSync(
  path.resolve(process.cwd(), "scripts/audit-results.json"),
  JSON.stringify(
    {
      issues,
      brokenLinks,
      localPathLeaks,
      oldBrandLeaks,
      dupTitles,
      wordCountStats,
    },
    null,
    2,
  ),
  "utf-8",
);
