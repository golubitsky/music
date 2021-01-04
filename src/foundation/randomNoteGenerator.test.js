import { randomNotes } from "./randomNoteGenerator.js";
import { WHITE_KEYS, SHARPS, FLATS } from "./constants.js";

describe("randomNotes", () => {
  test("12 notes are returned with sharps", () => {
    let actual = [...randomNotes("#")].sort();
    let expected = WHITE_KEYS.concat(SHARPS).sort();
    expect(actual).toEqual(expected);
  });

  test("12 notes are returned with flats", () => {
    let actual = [...randomNotes("b")].sort();
    let expected = WHITE_KEYS.concat(FLATS).sort();
    expect(actual).toEqual(expected);
  });

  test("notes are shuffled", () => {
    let actual = randomNotes("#");
    let expected = WHITE_KEYS.concat(SHARPS).sort();
    expect(actual).not.toEqual(expected);
  });
});
