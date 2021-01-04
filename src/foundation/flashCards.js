import { cards as pcCards } from "./flashCards/polychordFractions.js";
import { cards as thirdSeventhCards } from "./flashCards/thirdsAndSevenths.js";
const _ = require("lodash");

function cards(deck) {
  switch (deck[0]) {
    case "polychordFractions":
      return pcCards();
    case "seventhsAndThirds":
      return thirdSeventhCards(deck[1]);
    default:
      throw `not implemented for deck=${deck}`;
  }
}

function randomCard(deck, previousCard) {
  let allCards = cards(deck);

  while (true) {
    let card = _.sample(allCards);

    if (!_.isEqual(card, previousCard)) {
      return card;
    }
  }
}

export { cards, randomCard };
