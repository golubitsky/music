import flashCards from "./flashCards/polychordFractions.json";
const _ = require("lodash");

function cards() {
  return _.entries(flashCards).map(function (cardValues) {
    return {
      front: cardValues[0],
      back: cardValues[1],
    };
  });
}

function randomCard() {
  return _.sample(cards());
}

export { cards, randomCard };
