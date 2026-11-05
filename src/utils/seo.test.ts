import { describe, expect, it } from "vitest";
import type { CollectionEntry } from "astro:content";
import {
  presentArtwork,
  type Artist,
  type Artwork,
} from "./artwork-presentation";
import { presentExhibition, presentNews } from "./programme";
import * as fixtures from "@/test/fixtures";
import { presentArtist } from "./artists";
import { presentWorkshop } from "./programme";
import {
  aboutMeta,
  articleMeta,
  articleSchema,
  artistMeta,
  artworkMeta,
  artworkSchema,
  exhibitionMeta,
  exhibitionSchema,
  pageContext,
  webPageSchema,
  workshopMeta,
} from "./seo";

const site = new URL("https://example.test/");
const page = (path: string, locale: "zh" | "en" = "zh") =>
  pageContext({ url: new URL(path, site), site }, locale);

const artist = {
  id: "sarah-chen",
  data: { name: "Sarah Chen" },
} as unknown as Artist;
const artwork = {
  id: "whispering-pines",
  data: {
    title: { zh: "松语", en: "Whispering Pines" },
    medium: { zh: "IEPL专线", en: "IEPL Line" },
    year: 2023,
    availability: "available",
    artist: { collection: "artists", id: "sarah-chen" },
    dimensions: { width: 50, height: 70, unit: "cm" },
  },
} as unknown as Artwork;
const exhibition = {
  id: "echoes",
  data: {
    title: { zh: "晚高峰测速大横评", en: "Peak Hours Benchmark" },
    description: { zh: "群测报告", en: "A group test" },
    location: { zh: "freevpn.my 实验室", en: "freevpn.my Lab" },
    startDate: new Date("2026-09-03T00:00:00Z"),
    endDate: new Date("2026-10-31T00:00:00Z"),
    openingHours: [],
  },
} as unknown as CollectionEntry<"exhibitions">;
const article = {
  id: "opening",
  data: {
    title: { zh: "上线通知", en: "Opening" },
    description: { zh: "评测上线", en: "We opened" },
    pubDate: new Date("2025-03-15T09:30:00Z"),
    slides: [],
  },
} as unknown as CollectionEntry<"news">;

describe("seo schemas", () => {
  it("builds the WebPage default with the site as isPartOf", () => {
    const schema = webPageSchema(
      page("/about", "zh"),
      { name: "FreeVPN Lab", description: "About it" },
      { title: "关于", description: "d" },
    );
    expect(schema).toMatchObject({
      "@type": "WebPage",
      "@id": "https://example.test/about",
      inLanguage: "zh-CN",
      isPartOf: {
        "@type": "WebSite",
        url: "https://example.test/",
        name: "FreeVPN Lab",
      },
    });
  });

  it("absolutises the artist link and image on a VisualArtwork", () => {
    const p = presentArtwork(artwork, [artist], "zh");
    const schema = artworkSchema(page("/artworks/whispering-pines", "zh"), p, {
      description: "d",
      imageSrc: "/_astro/x.webp",
    });
    expect(schema).toMatchObject({
      "@type": "VisualArtwork",
      name: "松语",
      artMedium: "IEPL专线",
      dateCreated: "2023",
      creator: {
        "@type": "Person",
        name: "Sarah Chen",
        url: "https://example.test/artists/sarah-chen",
      },
      image: "https://example.test/_astro/x.webp",
      width: { "@type": "QuantitativeValue", value: 50, unitText: "cm" },
    });
  });

  it("formats exhibition dates as ISO days and articles with full timestamps", () => {
    expect(
      exhibitionSchema(
        page("/exhibitions/echoes", "zh"),
        presentExhibition(exhibition, "zh"),
      ),
    ).toMatchObject({
      "@type": "ExhibitionEvent",
      startDate: "2026-09-03",
      endDate: "2026-10-31",
      location: { "@type": "Place", name: "freevpn.my 实验室" },
    });
    const a = articleSchema(
      page("/news/opening", "zh"),
      presentNews(article, "zh"),
      {},
    );
    expect(a).toMatchObject({
      "@type": "NewsArticle",
      headline: "上线通知",
      datePublished: "2025-03-15T09:30:00.000Z",
    });
    expect((a as { image?: string }).image).toBeUndefined();
  });
});

describe("pageContext", () => {
  it("derives canonical, alternates and x-default from the site origin", () => {
    const ctx = pageContext(
      { url: new URL("https://example.test/en/artists/sarah-chen"), site },
      "en",
    );
    expect(ctx.url.href).toBe("https://example.test/en/artists/sarah-chen");
    expect(ctx.basePath).toBe("/artists/sarah-chen");
    expect(ctx.alternates).toEqual([
      {
        locale: "zh",
        path: "/artists/sarah-chen",
        href: "https://example.test/artists/sarah-chen",
      },
      {
        locale: "en",
        path: "/en/artists/sarah-chen",
        href: "https://example.test/en/artists/sarah-chen",
      },
    ]);
    expect(ctx.xDefault).toBe("https://example.test/artists/sarah-chen");
  });

  it("maps the home page of a prefixed locale back to the bare origin", () => {
    const ctx = pageContext(
      { url: new URL("https://example.test/en"), site },
      "en",
    );
    expect(ctx.basePath).toBe("/");
    expect(ctx.alternates.map((a) => a.path)).toEqual(["/", "/en"]);
    expect(ctx.xDefault).toBe("https://example.test/");
  });

  it("refuses to run without a site origin", () => {
    expect(() =>
      pageContext(
        { url: new URL("https://example.test/"), site: undefined },
        "zh",
      ),
    ).toThrow(/astro.config.mjs/);
  });
});

describe("page meta", () => {
  it("describes an artist by the first biography paragraph, else the short bio", () => {
    const withBio = presentArtist(
      fixtures.artist("a", {
        name: "A",
        biography: { zh: "一段。\n\n二段。" },
      }),
      "zh",
    );
    const meta = artistMeta(page("/artists/a", "zh"), withBio);
    expect(meta).toMatchObject({ title: "A", description: "一段。" });
    expect(meta.schema).toMatchObject({
      "@type": "Person",
      description: "一段。",
    });
    const noBio = presentArtist(
      fixtures.artist("b", {
        biography: { zh: "" },
        shortBio: { zh: "简短。" },
      }),
      "zh",
    );
    expect(artistMeta(page("/artists/b", "zh"), noBio).description).toBe(
      "简短。",
    );
  });

  it("captions an artwork from its facts; the schema prefers the editor's description", () => {
    const p = presentArtwork(artwork, [artist], "zh");
    const meta = artworkMeta(page("/artworks/whispering-pines", "zh"), p, {});
    expect(meta.title).toBe("松语");
    expect(meta.description).toBe(
      "松语, Sarah Chen, 2023. IEPL专线, 50 × 70 cm.",
    );
    expect(meta.schema).toMatchObject({ description: meta.description });
  });

  it("agrees between the meta tags and the schema for exhibitions and articles", () => {
    const e = exhibitionMeta(
      page("/exhibitions/echoes", "zh"),
      presentExhibition(exhibition, "zh"),
    );
    expect(e).toMatchObject({
      title: "晚高峰测速大横评",
      description: "群测报告",
      schema: { name: "晚高峰测速大横评", description: "群测报告" },
    });
    const a = articleMeta(
      page("/news/opening", "zh"),
      presentNews(article, "zh"),
      {},
    );
    expect(a).toMatchObject({
      title: "上线通知",
      description: "评测上线",
      schema: { headline: "上线通知", description: "评测上线" },
    });
  });

  it("describes a workshop by its registration info, without a schema", () => {
    const w = presentWorkshop(
      fixtures.workshop("w", { registerInfo: { zh: "立即阅读。" } }),
      "zh",
    );
    expect(workshopMeta(w)).toEqual({
      title: "w (zh)",
      description: "立即阅读。",
    });
  });

  it("describes the About page by its intro's first paragraph, without markup", () => {
    expect(
      aboutMeta("关于", "<p>我们是<em>实验室</em>。</p>\n\n<p>更多。</p>"),
    ).toEqual({ title: "关于", description: "我们是实验室。" });
  });
});
