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
        <div className="card-content">
          <span className="main-card-content">{this.props.cardContent.main}</span>

          {this.props.cardContent.additionalLines.map((line, index) => {
            return (
              <span className="additional-card-content" key={index}>
                {line}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}
