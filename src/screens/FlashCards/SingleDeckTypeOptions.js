import React from "react";
import Button from "react-bootstrap/Button";
import "screens/FlashCards/FlashCards.css";
import { decks } from "foundation/flashCards";

export default class SingleDeckTypeOptions extends React.Component {
  render() {
    return (
      <div className="SingleDeckTypeOptions">
        <div className="buttons">
          {decks({ type: this.props.deck.type }).map((deck, index) => (
            <Button
              variant="dark"
              onClick={() => {
                this.props.showRandomCard(deck);
              }}
              key={index}
            >
              {deck.displayName}
            </Button>
          ))}
        </div>
        {this.props.deck.type === "chords" && (
          <label>
            Shuffle Notes
            <input
              name="notesAreShuffled"
              type="checkbox"
              checked={this.props.notesAreShuffled}
              onChange={this.props.toggleNotesAreShuffled}
            />
          </label>
        )}
      </div>
    );
  }
}
