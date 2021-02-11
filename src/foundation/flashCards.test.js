const _ = require("lodash");

import {
  cards,
  randomCard,
  DECKS,
  deck,
  randomDeck,
} from "foundation/flashCards";
// To aid testing of notesAreShuffled.
import { notesInOneChord } from "foundation/flashCards/chords";

import {
  DIMINISHED,
  MINOR,
  MAJOR,
  AUGMENTED,
  MINOR_SEVEN,
  SEVEN,
  HALF_DIMINISHED_SEVEN,
  DIMINISHED_SEVEN,
  MAJOR_SEVEN,
} from "./constants.js";

describe("DECKS", () => {
  test("cards have front and back sides", () => {
    expect(DECKS).toEqual(
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

describe("deck", () => {
  test("returns a particular deck", () => {
    expect(deck({ type: "chords", subType: MAJOR_SEVEN })).toEqual({
      type: "chords",
      subType: MAJOR_SEVEN,
      displayName: MAJOR_SEVEN,
    });
  });
});

describe("randomDeck", () => {
  test("returns a random deck", () => {
    expect(DECKS).toContain(randomDeck());
  });
});

describe("cards", () => {
  test("cards have front and back sides", () => {
    let actual = randomCard({
      deck: deck({ type: "polychordFractions", subType: "polychordFractions" }),
    });

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
      deck: deck({ type: "chords", subType: MAJOR_SEVEN }),
      notesAreShuffled: true,
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
    expect(
      randomCard({
        deck: deck({
          type: "polychordFractions",
          subType: "polychordFractions",
        }),
      })
    ).toEqual(
      expect.objectContaining({
        front: expect.any(String),
        back: expect.any(String),
      })
    );
  });

  test.each([MAJOR_SEVEN, SEVEN, MINOR_SEVEN])(
    ".randomCard(%s)",
    (chordType) => {
      expect(
        randomCard({
          deck: deck({
            type: "seventhsAndThirds",
            subType: chordType,
          }),
        })
      ).toEqual(
        expect.objectContaining({
          front: expect.any(String),
          back: expect.any(String),
        })
      );
    }
  );

  test.each([
    DIMINISHED,
    MINOR,
    MAJOR,
    AUGMENTED,
    MINOR_SEVEN,
    SEVEN,
    HALF_DIMINISHED_SEVEN,
    DIMINISHED_SEVEN,
    MAJOR_SEVEN,
    "all",
  ])(".randomCard(%s)", (chordType) => {
    expect(
      randomCard({
        deck: deck({
          type: "chords",
          subType: chordType,
        }),
      })
    ).toEqual(
      expect.objectContaining({
        front: expect.any(String),
        back: expect.any(String),
      })
    );
  });

  test("seventh chord can appear in random order", () => {
    const randomMaj7Card = randomCard({
      deck: deck({ type: "chords", subType: MAJOR_SEVEN }),
      notesAreShuffled: true,
    });

    const randomMajor7CardSortedBack = randomMaj7Card.back
      .split(" ")
      .sort()
      .join(" ");

    const notesInSameChord = notesInOneChord({
      // Remove the chord symbol to get the note
      note: randomMaj7Card.front.slice(0, -1),
      chordQuality: MAJOR_SEVEN,
      notesAreShuffled: false,
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
      let firstCard = randomCard({
        deck: deck({
          type: "polychordFractions",
          subType: "polychordFractions",
        }),
      });
      let secondCard = randomCard({
        deck: deck({
          type: "polychordFractions",
          subType: "polychordFractions",
        }),
        previousCard: firstCard,
      });
      expect(firstCard).not.toEqual(secondCard);
    });
  });
});
