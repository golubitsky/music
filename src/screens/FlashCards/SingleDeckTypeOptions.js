import React from "react";
import "screens/FlashCards/FlashCards.css";

export default class SingleDeckOptions extends React.Component {
  render() {
    if (this.props.deckType !== "chords") {
      return null;
    }

    return (
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
    );
  }
}
