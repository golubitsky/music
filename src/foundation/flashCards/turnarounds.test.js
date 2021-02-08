import { cards } from "./turnarounds.js";
import { SEVEN, MINOR, FLAT } from "../constants.js";

describe("cards", () => {
  test("returns progression in all keys", () => {
    expect(
      cards({
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
