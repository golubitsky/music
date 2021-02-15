import { cards } from "./chords.js";
import {
  SHARP,
  FLAT,
  DIMINISHED,
  MINOR,
  MAJOR,
  AUGMENTED,
  DIMINISHED_SEVEN,
  SEVEN,
  MINOR_SEVEN,
  HALF_DIMINISHED_SEVEN,
  MAJOR_SEVEN,
} from "../constants.js";
const _ = require("lodash");

describe("cards", () => {
  test.each([
    [DIMINISHED, { front: `A${DIMINISHED}`, back: `A C E${FLAT}` }],
    [MINOR, { front: `A${MINOR}`, back: `A C E` }],
    [MAJOR, { front: "A", back: `A C${SHARP} E` }],
    [AUGMENTED, { front: `A${AUGMENTED}`, back: `A C${SHARP} E${SHARP}` }],
    [SEVEN, { front: `A${SEVEN}`, back: `A C${SHARP} E G` }],
    [MAJOR_SEVEN, { front: `A${MAJOR_SEVEN}`, back: `A C${SHARP} E G${SHARP}` }],
    [MINOR_SEVEN, { front: `A${MINOR_SEVEN}`, back: "A C E G" }],
    [HALF_DIMINISHED_SEVEN, { front: `B${HALF_DIMINISHED_SEVEN}`, back: "B D F A" }],
    [DIMINISHED_SEVEN, { front: `B${DIMINISHED_SEVEN}`, back: `B D F A${FLAT}` }],
  ])(".chord(%s, %o)", (chordQuality, expectedCard) => {
    expect(cards({ chordQuality: chordQuality })).toEqual(
      expect.arrayContaining([expectedCard])
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
    // notesAreShuffled will not return the root position chord
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
      notesAreShuffled: true,
    });

    const bHalfDiminished = _.find(
      results,
      (result) => result.front === `B${HALF_DIMINISHED_SEVEN}`
    );

    expect(permutationsBHalfDiminished).toContain(bHalfDiminished.back);
  });
});
