import { chord } from "./chordParser.js";
import { SEVEN, MINOR, FLAT, SHARP } from "./constants.js";

describe("chord", () => {
  test("parses the most basic major chord in a key", () => {
    expect(chord({abstractChord: "I", key: "A"})).toEqual("A");
  });
});
