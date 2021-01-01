const _ = require("lodash");

import flashCards from "./flashCards/polychordFractions.json";

function cards() {
  return _.entries(flashCards).map(function (cardValues) {
    return {
      front: cardValues[0],
      back: cardValues[1],
    };
  });
}

export { cards };
