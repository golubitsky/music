import React from "react";
import Button from "react-bootstrap/Button";
import { DECKS } from "foundation/flashCards";
import "screens/FlashCards/FlashCards.css";
import SingleDeckOptions from "screens/FlashCards/SingleDeckTypeOptions";

const _ = require("lodash");

export default class DeckTypeSelection extends React.Component {
  render() {
    return (
      <div className="deck-selection">
        {_.uniq(DECKS.map((deck) => deck.type)).map((deckType, outerIndex) => (
          <div className="deck-selection-row" key={outerIndex}>
            <span className="deck-selection-row-header" key={outerIndex + 10}>
              {deckType}
            </span>
            <div className="buttons" key={outerIndex + 20}>
              {DECKS.filter((deck) => deck.type === deckType).map(
                (deck, innerIndex) => (
                  <Button
                    variant="dark"
                    onClick={() => {
                      this.props.showRandomCard(deck);
                    }}
                    key={innerIndex}
                  >
                    {deck.displayName}
                  </Button>
                )
              )}
            </div>
            <SingleDeckOptions deckType={deckType} />
          </div>
        ))}
      </div>
    );
  }
}
