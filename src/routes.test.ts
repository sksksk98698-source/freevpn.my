import { describe, expect, it } from "vitest";
import type { CollectionEntry } from "astro:content";
import { routes } from "./routes";

const artwork = (id: string, availability: string) =>
  ({ id, data: { availability } }) as unknown as CollectionEntry<"artworks">;

describe("routes", () => {
  it("prefixes non-default locales and leaves the default bare", () => {
    expect(routes.artists("zh")).toBe("/artists");
    expect(routes.artists("en")).toBe("/en/artists");
    expect(routes.home("zh")).toBe("/");
    expect(routes.home("en")).toBe("/en");
    expect(routes.exhibition("en", "echoes-of-stillness")).toBe(
      "/en/exhibitions/echoes-of-stillness",
    );
    expect(routes.cv("sarah-chen")).toBe("/cv/sarah-chen.pdf");
  });

  it("sends an artwork to the section its Availability implies", () => {
    expect(routes.artwork("zh", artwork("a", "available"))).toBe("/artworks/a");
    expect(routes.artwork("zh", artwork("b", "sold"))).toBe("/artworks/b");
    expect(routes.artwork("en", artwork("c", "not-for-sale"))).toBe(
      "/en/private-collection/c",
    );
  });

  it("accepts an entry or a bare id for the other detail routes", () => {
    const artist = { id: "sarah-chen" } as CollectionEntry<"artists">;
    expect(routes.artist("zh", artist)).toBe(routes.artist("zh", "sarah-chen"));
    expect(routes.article("en", "grand-opening")).toBe(
      "/en/news/grand-opening",
    );
    expect(routes.workshop("en", "abstract")).toBe("/en/workshops/abstract");
  });
});
