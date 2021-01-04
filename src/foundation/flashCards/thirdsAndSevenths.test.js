import { cards } from "./thirdsAndSevenths.js";

// △

describe("cards", () => {
  test("returns dominant 7th", () => {
    expect(cards("7")).toEqual(
      expect.arrayContaining([
        {
          front: "A",
          back: "C#,G",
        },
      ])
    );
  });

  test("return major 7ths", () => {
    expect(cards("△")).toEqual(
      expect.arrayContaining([
        {
          front: "A",
          back: "C#,G#",
        },
      ])
    );
  });

  test("return minor 7ths", () => {
    expect(cards("m7")).toEqual(
      expect.arrayContaining([
        {
          front: "A",
          back: "C,G",
        },
      ])
    );
  });
});
