import { cards as pcCards } from "foundation/flashCards/polychordFractions";
import { cards as thirdSeventhCards } from "foundation/flashCards/thirdsAndSevenths";
import { cards as chordChards } from "foundation/flashCards/chords";
import {
  DIMINISHED,
  MINOR,
  MAJOR,
  AUGMENTED,
  MINOR_SEVEN,
  SEVEN,
  HALF_DIMINISHED_SEVEN,
  DIMINISHED_SEVEN,
  MAJOR_SEVEN,
} from "foundation/constants";

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
  ["chords", AUGMENTED],
  ["chords", MAJOR],
  ["chords", MINOR],
  ["chords", DIMINISHED],
  ["chords", "all"],
].map((deck) => {
  return {
    type: deck[0],
    subType: deck[1],
    displayName: deck[1],
  };
});

function deck({ type, subType }) {
  return DECKS.find((deck) => deck.type === type && deck.subType === subType);
}

function cards({ deck, notesAreShuffled }) {
  switch (deck.type) {
    case "polychordFractions":
      return pcCards();
    case "seventhsAndThirds":
      return thirdSeventhCards(deck.subType);
    case "chords":
      return chordChards({
        chordQuality: deck.subType,
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

export { cards, randomCard, DECKS, deck };
