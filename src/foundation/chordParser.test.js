import { chord } from "foundation/chordParser";
import { SEVEN, MINOR, SHARP, MAJOR_SEVEN } from "foundation/constants";

describe("chord", () => {
  test.each([
    ["I", "A", "A"],
    [`I${MAJOR_SEVEN}`, "A", `A${MAJOR_SEVEN}`],
    ["i", "A", `A${MINOR}`],
    ["ii", "A", `B${MINOR}`],
    ["V", "A", "E"],
    [`V${SEVEN}`, "A", `E${SEVEN}`],
    [`V/ii`, "A", `F${SHARP}`],
    [`V${SEVEN}/ii`, "A", `F${SHARP}${SEVEN}`],
    [`[ii V${SEVEN}]/ii`, "A", `C${SHARP}m F${SHARP}${SEVEN}`],
    ["I", `C${SHARP}`, `C${SHARP}`],
    ["ii", `C${SHARP}`, `D${SHARP}${MINOR}`],
    ["V", `C${SHARP}`, `G${SHARP}`],
  ])(".chord(%s, %s, %s)", (abstractChord, key, concreteChord) => {
    expect(chord({ abstractChord, key })).toBe(concreteChord);
  });
});
