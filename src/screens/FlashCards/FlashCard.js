import React from "react";
import "screens/FlashCards/FlashCards.css";

export default class FlashCard extends React.Component {
  render() {
    return (
      <div
        className="FlashCard"
        onClick={() => this.props.onCardClick()}
        style={{
          backgroundColor: this.props.cardBackgroundColor,
        }}
      >
        <span className="card-deck">{this.props.deck.displayName}</span>
        <span className="card-content">{this.props.card}</span>
      </div>
    );
  }
}
