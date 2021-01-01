import flashCards from "./flashCards/polychordFractions.json";
const _ = require("lodash");

function cards() {
  return _.entries(flashCards).flatMap(function (cardValues) {
    return [
      {
        front: cardValues[0],
        back: cardValues[1],
      },
      {
        front: cardValues[1],
        back: cardValues[0],
      },
    ];
  });
}

function randomCard() {
  return _.sample(cards())
}

export { cards, randomCard };
