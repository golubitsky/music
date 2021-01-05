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
      deck: deck,
      side: "front",
    };

    // This binding is necessary to make `this` work in the callback
    this.toggleNextCardFace = this.toggleNextCardFace.bind(this);
  }

  flipCard() {
    this.setState({
      side: this.state.side === "front" ? "back" : "front",
    });
  }

  handleCardClick() {
    if (this.state.side === this.state.nextCardSide) {
      this.flipCard();
    } else {
      this.showRandomCard(this.state.deck);
    }
  }

  showRandomCard(deck, side) {
    // Accept `side` as parameter to allow showing card _while_ changing the side that should be displayed.
    // UI seems more intuitive if the checkbox to toggle nextCardSide also displays a new card.
    this.setState({
      deck: deck,
      card: randomCard(deck, this.state.card),
      side: side || this.state.nextCardSide,
    });
  }

  toggleNextCardFace() {
    let side = this.state.nextCardSide === "front" ? "back" : "front";
    this.setState({
      nextCardSide: side,
    });
    this.showRandomCard(this.state.deck, side);
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
          onClick={() => this.handleCardClick()}
          style={{
            backgroundColor: CARD_COLORS_BY_SIDE[this.state.side],
          }}
        >
          <span className="card-content">
            {this.state.card[this.state.side]}
          </span>
          <span className="card-deck">{this.nameOfDeck(this.state.deck)}</span>
        </div>
        <div className="card-options">
          <label>
            Reverse
            <input
              name="card-reverse"
              type="checkbox"
              checked={this.state.nextCardSide === "back"}
              onChange={this.toggleNextCardFace}
            />
          </label>
        </div>
      </div>
    );
  }
}
