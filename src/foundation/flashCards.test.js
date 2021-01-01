const _ = require("lodash");

import { cards } from "./flashCards.js";

describe("cards", () => {
  test("cards have a front and back sides", () => {
    let actual = _.sample(cards());

    expect(actual).toEqual(
      expect.objectContaining({
        front: expect.any(String),
        back: expect.any(String),
      })
    );
  });

  test("all front/back duplicated as back/front, for simpler UI code", () => {
    // Might re-think this later. Might make more sense to:
    // Another function to have the notion of 'flipping' cards.
    let allCards = cards();
    let card = _.sample(allCards);

    let expectedMatchingCard = [
      {
        front: card.back,
        back: card.front,
      },
    ];
    expect(allCards).toEqual(expect.arrayContaining(expectedMatchingCard));
  });
});
