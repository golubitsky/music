import { cards } from "./turnarounds.js";
import { SEVEN, MINOR, FLAT } from "../../foundation/constants.js";

describe("cards", () => {
  test("returns progression in all keys", () => {
    expect(
      cards({
        abstractChordProgression: ["ii", `V${SEVEN}`, `[ii V${SEVEN}]/ii`],
      })
    ).toEqual(
      expect.arrayContaining([
        {
          front: `B${FLAT}`,
          back: `C${MINOR} F${SEVEN} D${MINOR} G${SEVEN}`,
        },
        {
          front: `D${FLAT}`,
          back: `E${FLAT}${MINOR} A${FLAT}${SEVEN} F${MINOR} B${FLAT}${SEVEN}`,
        },
      ])
    );
  });
});
