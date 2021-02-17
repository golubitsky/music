import { cards } from "./turnarounds.js";
import { SEVEN, MINOR, MAJOR_SEVEN, FLAT } from "../../foundation/constants.js";

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
  ])(".cards(%s, %o)", (abstractChordProgression, expectedCard) => {
    expect(cards({ abstractChordProgression })).toEqual(
      expect.arrayContaining([expectedCard])
    );
  });
});
