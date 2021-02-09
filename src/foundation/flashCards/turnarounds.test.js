import { cards } from "./turnarounds.js";
import { SEVEN, MINOR, FLAT } from "../constants.js";

describe("cards", () => {
  // Still broken for sharps.
  xtest("returns progression in all keys", () => {
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
