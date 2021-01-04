import { cards as pcCards } from "./flashCards/polychordFractions.js";
const _ = require("lodash");

function cards() {
  return pcCards();
}

function randomCard(previousCard) {
  let allCards = pcCards();

  while (true) {
    let card = _.sample(allCards);

    if (!_.isEqual(card, previousCard)) {
      return card;
    }
  }
}

export { cards, randomCard };
