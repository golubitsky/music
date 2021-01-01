const _ = require("lodash");

import flashCards from "./flashCards/polychordFractions.json";

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

export { cards };
