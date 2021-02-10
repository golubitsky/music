import { noteAbove } from "foundation/intervals";
import { SHARP, FLAT, DIMINISHED } from "foundation/constants";

describe("perfect unisons", () => {
  test.each([
    ["A", "A"],
    [`C${SHARP}`, `C${SHARP}`],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove({ note: startingNote, interval: "P1" })).toBe(expected);
  });
});

describe("major seconds", () => {
  test.each([
    ["A", "B"],
    ["B", `C${SHARP}`],
    [`C${SHARP}`, `D${SHARP}`],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove({ note: startingNote, interval: "M2" })).toBe(expected);
  });
});

describe("minor thirds", () => {
  test.each([
    ["A", "C"],
    ["B", "D"],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove({ note: startingNote, interval: "m3" })).toBe(expected);
  });
});

describe("major thirds", () => {
  test.each([
    ["A", `C${SHARP}`],
    ["B", `D${SHARP}`],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove({ note: startingNote, interval: "M3" })).toBe(expected);
  });
});

describe("perfect fourths", () => {
  test.each([
    ["A", "D"],
    [`B${FLAT}`, `E${FLAT}`],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove({ note: startingNote, interval: "P4" })).toBe(expected);
  });
});

describe("augmented fourths", () => {
  test.each([
    ["A", `D${SHARP}`],
    [`B${FLAT}`, "E"],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove({ note: startingNote, interval: "+4" })).toBe(expected);
  });
});

describe("diminished fifths", () => {
  test.each([
    ["A", `E${FLAT}`],
    [`B${FLAT}`, `F${FLAT}`],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove({ note: startingNote, interval: "o5" })).toBe(expected);
  });
});

describe("perfect fifths", () => {
  test.each([
    ["A", "E"],
    ["B", `F${SHARP}`],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove({ note: startingNote, interval: "P5" })).toBe(expected);
  });
});

describe("augmented fifths", () => {
  test.each([
    ["A", `E${SHARP}`],
    ["B", `F${SHARP}${SHARP}`],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove({ note: startingNote, interval: "+5" })).toBe(expected);
  });
});

describe("diminished sevenths", () => {
  test.each([
    ["A", `G${FLAT}`],
    [`C${SHARP}`, `B${FLAT}`],
    [`B${FLAT}`, `A${FLAT}${FLAT}`],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove({ note: startingNote, interval: "o7" })).toBe(expected);
  });
});

describe("minor sevenths", () => {
  test.each([
    ["A", "G"],
    ["B", "A"],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove({ note: startingNote, interval: "m7" })).toBe(expected);
  });
});

describe("major sevenths", () => {
  test.each([
    ["A", `G${SHARP}`],
    ["B", `A${SHARP}`],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove({ note: startingNote, interval: "M7" })).toBe(expected);
  });
});
