import React from "react";
import Button from "react-bootstrap/Button";
import { randomCard } from "../foundation/flashCards.js";
import "./FlashCards.css";

const _ = require("lodash");

const CARD_COLORS_BY_SIDE = {
  front: "blue",
  back: "green",
};

const decks = [
  ["polychordFractions"],
  ["seventhsAndThirds", "△"],
  ["seventhsAndThirds", "7"],
  ["seventhsAndThirds", "m7"],
];

export class FlashCards extends React.Component {
  constructor(props) {
    super(props);
    let deck = _.sample(decks);
    this.state = {
      nextCardSide: "front",
      card: randomCard(deck),
      // Only need this to highlight button for current deck.
      deck: deck,
      side: "front",
    };
  }

  flipCard() {
    this.setState({
      side: this.state.side === "front" ? "back" : "front",
    });
  }

  showRandomCard(deck) {
    this.setState({
      deck: deck,
      card: randomCard(deck, this.state.card),
      side: this.state.nextCardSide,
    });
  }

  nameOfDeck(deck) {
    return _.last(deck);
  }
  render() {
    if (this.props.isHidden) {
      return null;
    }

    return (
      <div className="FlashCards">
        <div className="buttons">
          {Object.keys(CARD_COLORS_BY_SIDE).map((side, index) => (
            <Button
              variant="dark"
              onClick={() => {
                this.setState({ nextCardSide: side });
              }}
              key={index}
            >
              Next: {side}
            </Button>
          ))}
          {decks.map((deck, index) => (
            <Button
              variant="dark"
              onClick={() => {
                this.showRandomCard(deck);
              }}
              key={index}
            >
              {this.nameOfDeck(deck)}
            </Button>
          ))}
        </div>
        <div
          className="card"
          onClick={() => this.flipCard()}
          style={{
            backgroundColor: CARD_COLORS_BY_SIDE[this.state.side],
          }}
        >
          <span className="card-content">
            {this.state.card[this.state.side]}
          </span>
          <span className="card-deck">{this.nameOfDeck(this.state.deck)}</span>
        </div>
      </div>
    );
  }
}
