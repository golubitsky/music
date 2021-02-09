import { chord } from "./chordParser.js";
import { SEVEN, MINOR, FLAT, SHARP } from "./constants.js";

describe("chord", () => {
  test.each([
    ["I", "A", "A"],
    ["i", "A", `A${MINOR}`],
    ["ii", "A", `B${MINOR}`],
    ["V", "A", "E"],
  ])(".chord(%s, %s, %s)", (abstractChord, key, concreteChord) => {
    expect(chord({ abstractChord, key })).toBe(concreteChord);
  });
});
