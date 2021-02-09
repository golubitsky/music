import { chord } from "./chordParser.js";
import { SEVEN, MINOR, FLAT, SHARP } from "./constants.js";

describe("chord", () => {
  test.each([
    ["I", "A", "A"],
    ["i", "A", `A${MINOR}`],
    ["ii", "A", `B${MINOR}`],
    ["V", "A", "E"],
    [`V${SEVEN}`, "A", `E${SEVEN}`],
    [`V/ii`, "A", `F${SHARP}`],
    [`V${SEVEN}/ii`, "A", `F${SHARP}${SEVEN}`],
  ])(".chord(%s, %s, %s)", (abstractChord, key, concreteChord) => {
    expect(chord({ abstractChord, key })).toBe(concreteChord);
  });
});
