const _ = require("lodash");

import {
  cards,
  randomCard,
  DECKS,
  deck,
  decks,
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

describe("decks", () => {
  test("returns one of each type of deck", () => {
    const result = decks({ type: "onePerType" });

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          type: "polychordFractions",
        }),
        expect.objectContaining({
          type: "chords",
        }),
      ])
    );

    const unique = _.uniq(result.map((deck) => deck.type));
    expect(unique.length).toEqual(result.length);
  });

  test("returns all decks of a given deckType", () => {
    expect(decks({ type: "chords" })).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          type: "chords",
          subType: MAJOR_SEVEN,
          displayName: MAJOR_SEVEN,
        }),
        expect.objectContaining({
          type: "chords",
          subType: DIMINISHED_SEVEN,
          displayName: DIMINISHED_SEVEN,
        }),
      ])
    );
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
  test.each([
    ["seventhsAndThirds", MAJOR_SEVEN],
    ["seventhsAndThirds", SEVEN],
    ["seventhsAndThirds", MINOR_SEVEN],
    ["chords", DIMINISHED],
    ["chords", MINOR],
    ["chords", MAJOR],
    ["chords", AUGMENTED],
    ["chords", MINOR_SEVEN],
    ["chords", SEVEN],
    ["chords", HALF_DIMINISHED_SEVEN],
    ["chords", DIMINISHED_SEVEN],
    ["chords", MAJOR_SEVEN],
    ["chords", "all"],
    ["polychordFractions", "polychordFractions"],
  ])(".randomCard(%s, %s)", (type, subType) => {
    const cardFromThisDeck = randomCard({ deck: deck({ type, subType }) });

    expect(cardFromThisDeck).toEqual(
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
