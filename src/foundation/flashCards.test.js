const _ = require("lodash");

import { cards, randomCard, AVAILABLE_DECKS } from "./flashCards.js";
import {
  MINOR_SEVEN,
  SEVEN,
  HALF_DIMINISHED_SEVEN,
  MAJOR_SEVEN,
} from "./constants.js";

describe("cards", () => {
  test("cards have front and back sides", () => {
    let actual = _.sample(cards(["polychordFractions"]));

    expect(actual).toEqual(
      expect.objectContaining({
        front: expect.any(String),
        back: expect.any(String),
      })
    );
  });
});

describe("randomCard", () => {
  test("returns a random polychordFractions card", () => {
    expect(randomCard(["polychordFractions"])).toEqual(
      expect.objectContaining({
        front: expect.any(String),
        back: expect.any(String),
      })
    );
  });

  test.each([MAJOR_SEVEN, SEVEN, MINOR_SEVEN])(
    ".randomCard(%s)",
    (chordType) => {
      expect(randomCard(["seventhsAndThirds", chordType])).toEqual(
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
      expect(randomCard(["seventhChords", chordType])).toEqual(
        expect.objectContaining({
          front: expect.any(String),
          back: expect.any(String),
        })
      );
    }
  );

  test("ensure card is different", () => {
    [1, 2, 3].forEach(function (i) {
      let firstCard = randomCard(["polychordFractions"]);
      let secondCard = randomCard(["polychordFractions"], firstCard);
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
