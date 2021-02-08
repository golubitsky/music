const _ = require("lodash");

import { cards, randomCard, AVAILABLE_DECKS } from "./flashCards.js";
// To aid testing of isRandomOrderBack.
import { notesInOneChord } from "./flashCards/seventhChords.js";

import {
  MINOR_SEVEN,
  SEVEN,
  HALF_DIMINISHED_SEVEN,
  MAJOR_SEVEN,
} from "./constants.js";

describe("cards", () => {
  test("cards have front and back sides", () => {
    let actual = _.sample(cards({ deck: ["polychordFractions"] }));

    expect(actual).toEqual(
      expect.objectContaining({
        front: expect.any(String),
        back: expect.any(String),
      })
    );
  });

  test("seventh chords can appear in random order", () => {
    // Establish randomization of all major 7 chords (stand-in for other qualities)
    const allMaj7Chords = cards({
      deck: ["seventhChords", MAJOR_SEVEN],
      isRandomOrderBack: true,
    });

    const cMajor7 = _.find(
      allMaj7Chords,
      (card) => card.front === `C${MAJOR_SEVEN}`
    );

    // Do not return root position chord stacked in thirds.
    expect(cMajor7.back).not.toEqual("C E G B");

    // Return the same chord in some order.
    const cMajor7Sorted = cMajor7.back.split(" ").sort().join(" ");
    expect(cMajor7Sorted).toEqual("B C E G");
  });
});

describe("randomCard", () => {
  test("returns a random polychordFractions card", () => {
    expect(randomCard({ deck: ["polychordFractions"] })).toEqual(
      expect.objectContaining({
        front: expect.any(String),
        back: expect.any(String),
      })
    );
  });

  test.each([MAJOR_SEVEN, SEVEN, MINOR_SEVEN])(
    ".randomCard(%s)",
    (chordType) => {
      expect(randomCard({ deck: ["seventhsAndThirds", chordType] })).toEqual(
        expect.objectContaining({
          front: expect.any(String),
          back: expect.any(String),
        })
      );
    }
  );

  test.each([MAJOR_SEVEN, SEVEN, MINOR_SEVEN, HALF_DIMINISHED_SEVEN, "all"])(
    ".randomCard(%s)",
    (chordType) => {
      expect(randomCard({ deck: ["seventhChords", chordType] })).toEqual(
        expect.objectContaining({
          front: expect.any(String),
          back: expect.any(String),
        })
      );
    }
  );

  test("seventh chord can appear in random order", () => {
    const randomMaj7Card = randomCard({
      deck: ["seventhChords", MAJOR_SEVEN],
      isRandomOrderBack: true,
    });

    const randomMajor7CardSortedBack = randomMaj7Card.back
      .split(" ")
      .sort()
      .join(" ");

    const notesInSameChord = notesInOneChord({
      // Remove the chord symbol to get the note
      note: randomMaj7Card.front.slice(0, -1),
      chordQuality: MAJOR_SEVEN,
      isRandomOrderBack: false,
    })
      .sort()
      .join(" ");

    // Do not return root position chord stacked in thirds.
    expect(randomMajor7CardSortedBack.back).not.toEqual(notesInSameChord);

    // But return the same notes.
    expect(randomMajor7CardSortedBack).toEqual(notesInSameChord);
  });

  test("ensure card is different", () => {
    [1, 2, 3].forEach(function (i) {
      let firstCard = randomCard({ deck: ["polychordFractions"] });
      let secondCard = randomCard({
        deck: ["polychordFractions"],
        previousCard: firstCard,
      });
      expect(firstCard).not.toEqual(secondCard);
    });
  });
});

describe("AVAILABLE_DECKS", () => {
  test("cards have front and back sides", () => {
    expect(AVAILABLE_DECKS).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          type: expect.any(String),
          subType: expect.any(String),
          displayName: expect.any(String),
        }),
      ])
    );
  });
});
