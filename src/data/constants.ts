import socialImageSrc from "@images/social.png";

/**
 * Build-time site constants. Everything editorial (gallery name, contact
 * details, social links) lives in the `site` singleton (`src/content/site/`)
 * and is edited through Keystatic; only values the build itself needs are
 * here. The canonical origin is `site` in astro.config.mjs (read through
 * `pageContext()` in `src/utils/seo.ts`), not a constant.
 */
export const SITE = {
  /** Default social sharing image. */
  socialImage: socialImageSrc,
  /** Theme colour reported to browsers and PWA manifests. */
  themeColor: "#ddd0c8",
  /**
   * Search Engine Webmaster Verifications.
   * Provide verification keys here or via environment variables:
   * - PUBLIC_GOOGLE_SITE_VERIFICATION
   * - PUBLIC_BING_SITE_VERIFICATION
   * - PUBLIC_SHENMA_SITE_VERIFICATION
   * - PUBLIC_BAIDU_SITE_VERIFICATION
   * Renders statically into <head> during build if non-empty.
   */
  verifications: {
    google: process.env.PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    bing: process.env.PUBLIC_BING_SITE_VERIFICATION || "",
    shenma: process.env.PUBLIC_SHENMA_SITE_VERIFICATION || "",
    baidu: process.env.PUBLIC_BAIDU_SITE_VERIFICATION || "",
  },
} as const;

/** How many workshops and news items the homepage shows. */
export const HOMEPAGE_ITEMS_LIMIT = 3;
