import type { CollectionEntry } from "astro:content";

/**
 * Fake content entries for specs. Each builder fills the fields the pure
 * modules read with plausible values; pass `data` overrides for the fields a
 * spec is about. Entries are cast, not parsed: only what a spec reads needs
 * to exist.
 */

type Key =
  | "artists"
  | "artworks"
  | "exhibitions"
  | "workshops"
  | "news"
  | "site"
  | "homepage";
/** Field names are checked; values are loose so a spec can leave locales out. */
type Data<C extends Key> = {
  [F in keyof CollectionEntry<C>["data"]]?: unknown;
};

function entry<C extends Key>(
  collection: C,
  id: string,
  defaults: Record<string, unknown>,
  data: Record<string, unknown>,
): CollectionEntry<C> {
  return {
    id,
    collection,
    data: { ...defaults, ...data },
  } as unknown as CollectionEntry<C>;
}

export const artist = (id: string, data: Data<"artists"> = {}) =>
  entry(
    "artists",
    id,
    {
      name: id,
      isEstate: false,
      shortBio: { zh: `${id} 简介`, en: `${id} short bio` },
      biography: { zh: `${id} 传记`, en: `${id} biography` },
      hasCv: false,
    },
    data,
  );

export const artwork = (
  id: string,
  data: Omit<Data<"artworks">, "artist"> & { artist?: string } = {},
) => {
  const { artist: artistId = "artist", ...rest } = data;
  return entry(
    "artworks",
    id,
    {
      availability: "available",
      artist: { collection: "artists", id: artistId },
      title: { zh: `${id} (zh)`, en: `${id} (en)` },
      medium: { zh: "IEPL专线", en: "IEPL Line" },
      dimensions: { width: 100, height: 80, unit: "cm" },
    },
    rest,
  );
};

export const exhibition = (id: string, data: Data<"exhibitions"> = {}) =>
  entry(
    "exhibitions",
    id,
    {
      title: { zh: `${id} (zh)`, en: `${id} (en)` },
      startDate: new Date("2026-01-01"),
      endDate: new Date("2026-02-01"),
      timeline: { zh: `${id} 时间线`, en: `${id} timeline` },
      openingHours: [],
    },
    data,
  );

export const workshop = (id: string, data: Data<"workshops"> = {}) =>
  entry(
    "workshops",
    id,
    { title: { zh: `${id} (zh)`, en: `${id} (en)` } },
    data,
  );

export const news = (id: string, data: Data<"news"> = {}) =>
  entry(
    "news",
    id,
    {
      title: { zh: `${id} (zh)`, en: `${id} (en)` },
      pubDate: new Date("2026-01-01"),
      description: { zh: `${id} 描述`, en: `${id} description` },
      slides: [],
    },
    data,
  );

export const site = (data: Data<"site"> = {}) =>
  entry(
    "site",
    "index",
    {
      name: "FreeVPN Lab",
      description: { zh: "全球网络评测实验室", en: "A global benchmark lab" },
      tagline: { zh: "专业评测与专线推荐", en: "Tagline" },
      address: "1 Street\nCity",
      social: {},
    },
    data,
  );

export const homepage = (data: Data<"homepage"> = {}) =>
  entry(
    "homepage",
    "index",
    {
      intro: {
        subheading: { zh: "简介", en: "Intro" },
        content: { zh: "简介内容", en: "Intro content" },
      },
      events: {
        subheading: { zh: "专题", en: "Events" },
        content: { zh: "专题内容", en: "Events content" },
        buttonText: { zh: "全部专题", en: "All events" },
      },
      about: {
        content: { zh: "关于", en: "About" },
        buttonText: { zh: "关于我们", en: "About us" },
        galleryItems: [],
      },
      collection: [],
    },
    data,
  );
