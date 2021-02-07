import { cards as pcCards } from "./flashCards/polychordFractions.js";
import { cards as thirdSeventhCards } from "./flashCards/thirdsAndSevenths.js";
import { cards as seventhChordCards } from "./flashCards/seventhChords.js";
import {
  MAJOR_SEVEN,
  SEVEN,
  MINOR_SEVEN,
  HALF_DIMINISHED_SEVEN,
  DIMINISHED_SEVEN,
} from "./constants.js";

const _ = require("lodash");

const DECKS = [
  ["polychordFractions", "polychordFractions"],
  ["seventhsAndThirds", MAJOR_SEVEN],
  ["seventhsAndThirds", SEVEN],
  ["seventhsAndThirds", MINOR_SEVEN],
  ["seventhChords", MAJOR_SEVEN],
  ["seventhChords", SEVEN],
  ["seventhChords", MINOR_SEVEN],
  ["seventhChords", HALF_DIMINISHED_SEVEN],
  ["seventhChords", DIMINISHED_SEVEN],
  ["seventhChords", "all"],
];

function cards(deck) {
  switch (deck[0]) {
    case "polychordFractions":
      return pcCards();
    case "seventhsAndThirds":
      return thirdSeventhCards(deck[1]);
    case "seventhChords":
      return seventhChordCards({ chordQuality: deck[1] });
    default:
      throw new Error(`not implemented for deck=${deck}`);
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

function availableDecks() {
  return DECKS.map((deck) => {
    return {
      type: deck[0],
      subType: deck[1],
      displayName: deck[1],
    };
  });
}

const AVAILABLE_DECKS = availableDecks();

export { cards, randomCard, AVAILABLE_DECKS, DECKS };
