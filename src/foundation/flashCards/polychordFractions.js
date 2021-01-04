import flashCards from "./polychordFractions.json";
const _ = require("lodash");

function cards() {
  return _.entries(flashCards).map(function (cardValues) {
    return {
      front: cardValues[0],
      back: cardValues[1],
    };
  });
}

export { cards };
