import fs from "node:fs";

// 1. Update src/i18n/config.ts
const configContent = `/**
 * Locale configuration.
 *
 * This is the single source of truth for which languages the site is published
 * in. \`astro.config.mjs\`, the content schemas, the Keystatic admin and every
 * component read from here.
 */
export const locales = ["zh", "en"] as const;

export type Locale = (typeof locales)[number];

/** Served without a URL prefix. Every other locale lives under \`/<locale>/\`. */
export const defaultLocale: Locale = "zh";

/** Short labels shown in the language switcher. */
export const localeLabels: Record<Locale, string> = {
  zh: "中",
  en: "EN",
};

/** BCP 47 tags used for \`<html lang>\`, \`hreflang\` and structured data. */
export const localeTags: Record<Locale, string> = {
  zh: "zh-CN",
  en: "en-US",
};

export function isLocale(value: unknown): value is Locale {
  return (
    typeof value === "string" && (locales as readonly string[]).includes(value)
  );
}

/** Narrow an arbitrary value (typically \`Astro.currentLocale\`) to a Locale. */
export function resolveLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}

/**
 * Prefix a site-relative path with the locale segment when needed.
 * \`localizePath("en", "/artworks")\` → \`/en/artworks\`; \`localizePath("zh", "/artworks")\` → \`/artworks\`.
 */
export function localizePath(locale: Locale, path = "/"): string {
  const clean = path.startsWith("/") ? path : \`/\${path}\`;
  if (locale === defaultLocale) return clean;
  return clean === "/" ? \`/\${locale}\` : \`/\${locale}\${clean}\`;
}

/** Strip a leading locale segment from a pathname. */
export function stripLocale(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0])) segments.shift();
  return \`/\${segments.join("/")}\`;
}

/** Read the locale from a pathname (\`/en/about\` → \`en\`, \`/about\` → default \`zh\`). */
export function localeFromPath(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0];
  return isLocale(first) ? first : defaultLocale;
}
`;
fs.writeFileSync("src/i18n/config.ts", configContent, "utf8");
console.log("Updated src/i18n/config.ts");
