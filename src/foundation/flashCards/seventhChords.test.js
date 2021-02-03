import { cards } from "./seventhChords.js";
const _ = require("lodash");

describe("cards", () => {
  test("returns dominant 7ths", () => {
    expect(cards({ chordQuality: "7" })).toEqual(
      expect.arrayContaining([
        {
          front: "A7",
          back: "A C# E G",
        },
      ])
    );
  });

  test("returns major 7ths", () => {
    expect(cards({ chordQuality: "△" })).toEqual(
      expect.arrayContaining([
        {
          front: "A△",
          back: "A C# E G#",
        },
      ])
    );
  });

  test("returns minor 7ths", () => {
    expect(cards({ chordQuality: "m7" })).toEqual(
      expect.arrayContaining([
        {
          front: "Am7",
          back: "A C E G",
        },
      ])
    );
  });

  test("returns half-diminished 7ths", () => {
    expect(cards({ chordQuality: "ø7" })).toEqual(
      expect.arrayContaining([
        {
          front: "Bø",
          back: "B D F A",
        },
      ])
    );
  });

  test("returns all 7ths", () => {
    expect(cards({ chordQuality: "all" })).toEqual(
      expect.arrayContaining([
        {
          front: "C△",
          back: "C E G B",
        },
        {
          front: "F7",
          back: "F A C Eb",
        },
        {
          front: "Am7",
          back: "A C E G",
        },
        {
          front: "Bø",
          back: "B D F A",
        },
      ])
    );
  });

  const permutationsBHalfDiminished = [
    // isRandomOrderBack will not return the root position chord
    // "B D F A",
    "B D A F",
    "B F D A",
    "B F A D",
    "B A D F",
    "B A F D",
    "D B F A",
    "D B A F",
    "D F B A",
    "D F A B",
    "D A B F",
    "D A F B",
    "F B D A",
    "F B A D",
    "F D B A",
    "F D A B",
    "F A B D",
    "F A D B",
    "A B D F",
    "A B F D",
    "A D B F",
    "A D F B",
    "A F B D",
    "A F D B",
  ];
  test("back can be shuffled", () => {
    const results = cards({ chordQuality: "ø7", isRandomOrderBack: true });

    const bHalfDiminished = _.find(results, (result) => result.front === "Bø");

    expect(permutationsBHalfDiminished).toContain(bHalfDiminished.back);
  });
});
