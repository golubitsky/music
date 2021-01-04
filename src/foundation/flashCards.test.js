const _ = require("lodash");

import { cards, randomCard } from "./flashCards.js";

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

  test.each(["△", "7", "m7"])(".randomCard(%s)", (chordType) => {
    expect(randomCard(["seventhsAndThirds", chordType])).toEqual(
      expect.objectContaining({
        front: expect.any(String),
        back: expect.any(String),
      })
    );
  });

  test("ensure card is different", () => {
    [1, 2, 3].forEach(function (i) {
      let firstCard = randomCard(["polychordFractions"]);
      let secondCard = randomCard(["polychordFractions"], firstCard);
      expect(firstCard).not.toEqual(secondCard);
    });
  });
});
