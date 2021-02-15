import { cards as pcCards } from "services/flashCards/polychordFractions";
import { cards as thirdSeventhCards } from "services/flashCards/thirdsAndSevenths";
import { cards as chordChards } from "services/flashCards/chords";
import { cards as turnaroundChards } from "services/flashCards/turnarounds";
import { cards as modesChards } from "services/flashCards/modes";
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
  ["turnarounds", ["ii", `V${SEVEN}`, `[ii V${SEVEN}]/ii`]],
  ["modes", MAJOR],
  ["modes", `mel. ${MINOR}`],
].map((deckData) => {
  const [type, subType] = deckData;
  return {
    type: type,
    subType: subType,
    displayName: _.isArray(subType) ? subType.join(" ") : subType,
  };
});

function deck({ type, subType }) {
  return decks({ type }).find((deck) => _.isEqual(deck.subType, subType));
}

function decks({ type }) {
  if (type === "onePerType") {
    return _.map(
      _.groupBy(DECKS, (deck) => deck.type),
      _.sample
    );
  }

  return DECKS.filter((deck) => deck.type === type);
}

function randomDeck() {
  return _.sample(DECKS);
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
    case "turnarounds":
      return turnaroundChards({
        abstractChordProgression: deck.subType,
      });
    case "modes":
      return modesChards({
        subType: deck.subType,
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

export { DECKS, deck, decks, randomDeck, cards, randomCard };
