import { randomNotes, WHITE_KEYS, BLACK_KEYS } from "./randomNoteGenerator.js";

describe("randomNotes", () => {
  test("all notes are returned", () => {
    let actual = [...randomNotes()].sort();
    let expected = WHITE_KEYS.concat(BLACK_KEYS).sort();
    expect(actual).toEqual(expected);
  });

  test("notes are shuffled", () => {
    let actual = randomNotes();
    let expected = WHITE_KEYS.concat(BLACK_KEYS).sort();
    expect(actual).not.toEqual(expected);
  });
});
