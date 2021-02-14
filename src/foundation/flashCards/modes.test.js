import { cards } from "./modes.js";
import { MAJOR, SHARP, FLAT, MAJOR_SEVEN } from "foundation/constants.js";

describe("cards", () => {
  test("returns cards with chords and mode names/accidentals", () => {
    expect(
      cards({
        subType: MAJOR,
      })
    ).toEqual(
      expect.arrayContaining([
        {
          front: `I${MAJOR_SEVEN}`,
          back: `Ionian`,
        },
      ])
    );
  });
});
