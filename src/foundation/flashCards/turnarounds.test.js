import { cards } from "./turnarounds.js";
import { SEVEN, MINOR, FLAT } from "../constants.js";

describe("cards", () => {
  xtest("returns progression in all keys", () => {
    expect(
      cards({
        // TODO: 'ii V⁷ iii V⁷/ii' would be more correct/useful.
        // TODO: 'ii V⁷ [ii V⁷]/ii' would be more correct/useful.
        abstractChordProgression: ["i", `IV${SEVEN}`, "ii", `V${SEVEN}`],
      })
    ).toEqual(
      expect.arrayContaining([
        {
          front: `A`,
          back: `A${MINOR} D${SEVEN} B${MINOR} E${SEVEN}`,
        },
        {
          front: `E${FLAT}`,
          back: `E${FLAT}${MINOR} A${FLAT}${SEVEN} F${MINOR} B${FLAT}${SEVEN}`,
        },
      ])
    );
  });
});
