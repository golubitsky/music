import { chord } from "foundation/chordParser";
import { SEVEN, MINOR, SHARP } from "foundation/constants";

describe("chord", () => {
  test.each([
    ["I", "A", "A"],
    ["i", "A", `A${MINOR}`],
    ["ii", "A", `B${MINOR}`],
    ["V", "A", "E"],
    [`V${SEVEN}`, "A", `E${SEVEN}`],
    [`V/ii`, "A", `F${SHARP}`],
    [`V${SEVEN}/ii`, "A", `F${SHARP}${SEVEN}`],
    [`[ii V${SEVEN}]/ii`, "A", `C${SHARP}m F${SHARP}${SEVEN}`],
    ["I", "C#", "C#"],
    ["ii", `C${SHARP}`, `D${SHARP}${MINOR}`],
    ["V", `C${SHARP}`, `G${SHARP}`],
  ])(".chord(%s, %s, %s)", (abstractChord, key, concreteChord) => {
    expect(chord({ abstractChord, key })).toBe(concreteChord);
  });
});
