const _ = require("lodash");

import { cards, randomCard } from "./flashCards.js";

describe("cards", () => {
  test("cards have front and back sides", () => {
    let actual = _.sample(cards());

    expect(actual).toEqual(
      expect.objectContaining({
        front: expect.any(String),
        back: expect.any(String),
      })
    );
  });
});

describe("randomCard", () => {
  test("returns a random card", () => {
    expect(randomCard()).toEqual(
      expect.objectContaining({
        front: expect.any(String),
        back: expect.any(String),
      })
    );
  });

  test("ensure card is different", () => {
    [1, 2, 3].forEach(function (i) {
      let firstCard = randomCard();
      let secondCard = randomCard(firstCard);
      expect(firstCard).not.toEqual(secondCard);
    });
  });
});
