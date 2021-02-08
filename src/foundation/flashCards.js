import { cards as pcCards } from "./flashCards/polychordFractions.js";
import { cards as thirdSeventhCards } from "./flashCards/thirdsAndSevenths.js";
import { cards as chordChards } from "./flashCards/chords.js";
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
  ["chords", MAJOR_SEVEN],
  ["chords", SEVEN],
  ["chords", MINOR_SEVEN],
  ["chords", HALF_DIMINISHED_SEVEN],
  ["chords", DIMINISHED_SEVEN],
  ["chords", "all"],
];

function cards({ deck, notesAreShuffled }) {
  switch (deck[0]) {
    case "polychordFractions":
      return pcCards();
    case "seventhsAndThirds":
      return thirdSeventhCards(deck[1]);
    case "chords":
      return chordChards({
        chordQuality: deck[1],
        notesAreShuffled: notesAreShuffled,
      });
    default:
      throw new Error(`not implemented for deck=${deck}`);
  }
}

function randomCard({ deck, previousCard, notesAreShuffled }) {
  let allCards = cards({ deck: deck, notesAreShuffled: notesAreShuffled });

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
