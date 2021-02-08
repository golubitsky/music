import { noteAbove } from "./intervals.js";
import { SHARP, FLAT, DIMINISHED } from "./constants.js";

describe("minor thirds", () => {
  test.each([
    ["A", "C"],
    ["B", "D"],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove(startingNote, "m3")).toBe(expected);
  });
});

describe("major thirds", () => {
  test.each([
    ["A", `C${SHARP}`],
    ["B", `D${SHARP}`],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove(startingNote, "M3")).toBe(expected);
  });
});

describe("augmented fourths", () => {
  test.each([
    ["A", `D${SHARP}`],
    [`B${FLAT}`, "E"],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove(startingNote, "+4")).toBe(expected);
  });
});

describe("diminished fifths", () => {
  test.each([
    ["A", `E${FLAT}`],
    [`B${FLAT}`, `F${FLAT}`],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove(startingNote, `o5`)).toBe(expected);
  });
});

describe("perfect fifths", () => {
  test.each([
    ["A", "E"],
    ["B", `F${SHARP}`],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove(startingNote, "P5")).toBe(expected);
  });
});

describe("augmented fifths", () => {
  test.each([
    ["A", `E${SHARP}`],
    ["B", `F${SHARP}${SHARP}`],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove(startingNote, "+5")).toBe(expected);
  });
});


describe("diminished sevenths", () => {
  test.each([
    ["A", `G${FLAT}`],
    [`C${SHARP}`, `B${FLAT}`],
    [`B${FLAT}`, `A${FLAT}${FLAT}`],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove(startingNote, `o7`)).toBe(expected);
  });
});

describe("minor sevenths", () => {
  test.each([
    ["A", "G"],
    ["B", "A"],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove(startingNote, "m7")).toBe(expected);
  });
});

describe("major sevenths", () => {
  test.each([
    ["A", `G${SHARP}`],
    ["B", `A${SHARP}`],
  ])(".noteAbove(%s, %s)", (startingNote, expected) => {
    expect(noteAbove(startingNote, "M7")).toBe(expected);
  });
});
