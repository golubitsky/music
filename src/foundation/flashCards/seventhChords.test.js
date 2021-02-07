import { cards } from "./seventhChords.js";
const _ = require("lodash");
import {
  SHARP,
  FLAT,
  SEVEN,
  MINOR_SEVEN,
  MAJOR_SEVEN,
  HALF_DIMINISHED_SEVEN,
  DIMINISHED_SEVEN,
} from "../constants.js";

describe("cards", () => {
  test("returns dominant 7ths", () => {
    expect(cards({ chordQuality: SEVEN })).toEqual(
      expect.arrayContaining([
        {
          front: `A${SEVEN}`,
          back: `A C${SHARP} E G`,
        },
      ])
    );
  });

  test("returns major 7ths", () => {
    expect(cards({ chordQuality: "△" })).toEqual(
      expect.arrayContaining([
        {
          front: "A△",
          back: `A C${SHARP} E G${SHARP}`,
        },
      ])
    );
  });

  test("returns minor 7ths", () => {
    expect(cards({ chordQuality: MINOR_SEVEN })).toEqual(
      expect.arrayContaining([
        {
          front: `A${MINOR_SEVEN}`,
          back: "A C E G",
        },
      ])
    );
  });

  test("returns half-diminished 7ths", () => {
    expect(cards({ chordQuality: `${HALF_DIMINISHED_SEVEN}` })).toEqual(
      expect.arrayContaining([
        {
          front: `B${HALF_DIMINISHED_SEVEN}`,
          back: "B D F A",
        },
      ])
    );
  });

  test("returns diminished 7ths", () => {
    expect(cards({ chordQuality: `${DIMINISHED_SEVEN}` })).toEqual(
      expect.arrayContaining([
        {
          front: `B${DIMINISHED_SEVEN}`,
          back: `B D F A${FLAT}`,
        },
      ])
    );
  });

  test("returns all 7ths", () => {
    expect(cards({ chordQuality: "all" })).toEqual(
      expect.arrayContaining([
        {
          front: `C${MAJOR_SEVEN}`,
          back: "C E G B",
        },
        {
          front: `F${SEVEN}`,
          back: `F A C E${FLAT}`,
        },
        {
          front: `A${MINOR_SEVEN}`,
          back: "A C E G",
        },
        {
          front: `B${HALF_DIMINISHED_SEVEN}`,
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
    const results = cards({
      chordQuality: HALF_DIMINISHED_SEVEN,
      isRandomOrderBack: true,
    });

    const bHalfDiminished = _.find(results, (result) => result.front === "Bø");

    expect(permutationsBHalfDiminished).toContain(bHalfDiminished.back);
  });
});
