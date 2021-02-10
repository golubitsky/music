import React from "react";
import Button from "react-bootstrap/Button";
import { AVAILABLE_DECKS } from "foundation/flashCards";
import "screens/FlashCards/FlashCards.css";

const _ = require("lodash");

export default class DeckSelection extends React.Component {
  render() {
    return (
      <div className="deck-selection">
        {_.uniq(AVAILABLE_DECKS.map((deck) => deck.type)).map(
          (deckType, outerIndex) => (
            <div className="deck-selection-row" key={outerIndex}>
              <span className="deck-selection-row-header" key={outerIndex + 10}>
                {deckType}
              </span>
              <div className="buttons" key={outerIndex + 20}>
                {AVAILABLE_DECKS.filter((deck) => deck.type === deckType).map(
                  (deck, innerIndex) => (
                    <Button
                      variant="dark"
                      onClick={() => {
                        this.props.showRandomCard([deck.type, deck.subType]);
                      }}
                      key={innerIndex}
                    >
                      {deck.displayName}
                    </Button>
                  )
                )}
              </div>
              {deckType === "chords" && (
                <div className="card-option-container">
                  <label>
                    Shuffle Notes
                    <input
                      name="notesAreShuffled"
                      type="checkbox"
                      checked={this.props.notesAreShuffled}
                      onChange={this.props.toggleNotesAreShuffled}
                    />
                  </label>
                </div>
              )}
            </div>
          )
        )}
      </div>
    );
  }
}
