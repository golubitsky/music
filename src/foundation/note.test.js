import { ascendingInterval, noteAbove } from "./note.js";

describe("intervals", () => {
  test.each([
    ["A", "m3", "C"],
    ["C", "P5", "G"],
    ["G", "P4", "C"],
    ["C", "M6", "A"],
    ["F", "d5", "B"],
    ["Eb", "P5", "Bb"],
    ["C#", "M2", "D#"],
    ["A", "M3", "C#"],
    ["B", "M3", "D#"],
    ["Db", "M7", "C"],
  ])(".ascendingInterval(%s, %s, %s)", (note, interval, otherNote) => {
    expect(ascendingInterval(note, otherNote)).toBe(interval);
    expect(noteAbove(note, interval)).toBe(otherNote);
  });
});
