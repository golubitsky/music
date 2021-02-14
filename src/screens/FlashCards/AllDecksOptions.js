import React from "react";
import "screens/FlashCards/FlashCards.css";

export default class AllDecksOptions extends React.Component {
  render() {
    return (
      <div className="card-option-container">
        <label>
          Reverse
          <input
            name="card-reverse"
            type="checkbox"
            checked={this.props.nextCardSide === "back"}
            onChange={this.props.toggleNextCardFace}
          />
        </label>
      </div>
    );
  }
}
