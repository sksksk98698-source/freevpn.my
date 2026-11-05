import fs from "fs";
import path from "path";

const oldArtworks = [
  "alpine-echo-field",
  "aurora-syntax",
  "between-echoes",
  "digital-bloom",
  "eternal-stillness",
  "forest-of-breathing-lines",
  "fragmented-city",
  "golden-anatomy",
  "horizon-pulse",
  "lighthouse-of-quiet-tides",
  "lines-of-silence",
  "lunar-fragments",
  "memory-of-water",
  "reverie-in-red",
  "spectrum-of-thought",
  "the-blue-interval",
  "the-garden-within",
  "the-silent-horizon",
  "whispering-pines",
];

function search(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (
        !full.includes("node_modules") &&
        !full.includes(".git") &&
        !full.includes(".astro")
      ) {
        search(full);
      }
    } else if (
      full.endsWith(".json") ||
      full.endsWith(".ts") ||
      full.endsWith(".astro")
    ) {
      if (full.includes(path.join("content", "artworks"))) continue;
      const content = fs.readFileSync(full, "utf8");
      for (const art of oldArtworks) {
        if (content.includes(`"${art}"`)) {
          console.log(`Artwork "${art}" found in ${full}`);
        }
      }
    }
  }
}

search("src");
console.log("Search complete.");
