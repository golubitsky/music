import { cards } from "./thirdsAndSevenths.js";
import { SHARP, FLAT, DIMINISHED } from "../constants.js";

describe("cards", () => {
  test("returns dominant 7ths", () => {
    expect(cards("7")).toEqual(
      expect.arrayContaining([
        {
          front: "A",
          back: `C${SHARP} G`,
        },
      ])
    );
  });

  test("returns major 7ths", () => {
    expect(cards("△")).toEqual(
      expect.arrayContaining([
        {
          front: "A",
          back: `C${SHARP} G${SHARP}`,
        },
      ])
    );
  });

  test("returns minor 7ths", () => {
    expect(cards("m7")).toEqual(
      expect.arrayContaining([
        {
          front: "A",
          back: "C G",
        },
      ])
    );
  });
});
