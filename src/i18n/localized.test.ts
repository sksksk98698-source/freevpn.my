import { describe, expect, it } from "vitest";
import { pick, text } from "./localized";

describe("pick", () => {
  it("prefers the requested locale", () => {
    expect(pick({ zh: "蓝色", en: "Blue" }, "en")).toBe("Blue");
    expect(pick({ zh: "蓝色", en: "Blue" }, "zh")).toBe("蓝色");
  });

  it("falls back to the default locale when the requested one is empty or missing", () => {
    expect(pick({ zh: "蓝色", en: "" }, "en")).toBe("蓝色");
    expect(pick({ zh: "蓝色" }, "en")).toBe("蓝色");
  });

  it("never falls back to a third locale", () => {
    expect(pick({ en: "Blue" }, "zh")).toBeUndefined();
    expect(pick(undefined, "zh")).toBeUndefined();
  });

  it("text() returns an empty string instead of undefined", () => {
    expect(text({ en: "Blue" }, "zh")).toBe("");
  });
});
