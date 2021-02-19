import { cards, NAMED_TURNAROUNDS } from "./turnarounds.js";
import {
  SEVEN,
  MINOR,
  MAJOR_SEVEN,
  FLAT,
  HALF_DIMINISHED_SEVEN,
} from "../../foundation/constants.js";

describe("cards", () => {
  test.each([
    [
      ["ii", `V${SEVEN}`, `[ii V${SEVEN}]/ii`],
      {
        front: [`B${FLAT}`],
        back: [`C${MINOR} F${SEVEN} D${MINOR} G${SEVEN}`],
      },
    ],
    [
      [`ii`, `V${SEVEN}`, `I${MAJOR_SEVEN}`, `V${SEVEN}/ii`],
      {
        front: [`B${FLAT}`],
        back: [`C${MINOR} F${SEVEN} B${FLAT}${MAJOR_SEVEN} G${SEVEN}`],
      },
    ],

    [
      NAMED_TURNAROUNDS["Stella"],
      {
        front: [`B${FLAT}`, "Stella"],
        back: [
          `E${HALF_DIMINISHED_SEVEN} A${SEVEN} D${HALF_DIMINISHED_SEVEN} G${SEVEN}`,
          `C${HALF_DIMINISHED_SEVEN} F${SEVEN} B${FLAT}${MAJOR_SEVEN}`,
        ],
      },
    ],
  ])(".cards(%s, %o)", (abstractChordProgression, expectedCard) => {
    expect(cards({ abstractChordProgression })).toEqual(
      expect.arrayContaining([expectedCard])
    );
  });
});
