import { cards } from "./thirdsAndSevenths.js";
import {
  SHARP,
  MINOR_SEVEN,
  SEVEN,
  MAJOR_SEVEN,
} from "../../foundation/constants.js";

describe("cards", () => {
  test("returns dominant 7ths", () => {
    expect(cards(SEVEN)).toEqual(
      expect.arrayContaining([
        {
          front: ["A"],
          back: [`C${SHARP} G`],
        },
      ])
    );
  });

  test("returns major 7ths", () => {
    expect(cards(MAJOR_SEVEN)).toEqual(
      expect.arrayContaining([
        {
          front: ["A"],
          back: [`C${SHARP} G${SHARP}`],
        },
      ])
    );
  });

  test("returns minor 7ths", () => {
    expect(cards(MINOR_SEVEN)).toEqual(
      expect.arrayContaining([
        {
          front: ["A"],
          back: ["C G"],
        },
      ])
    );
  });
});
