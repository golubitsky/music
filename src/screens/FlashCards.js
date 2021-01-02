import React from "react";
import Button from "react-bootstrap/Button";
import { randomCard } from "../foundation/flashCards.js";
import "./FlashCards.css";

const _ = require("lodash");

const CARD_COLORS_BY_SIDE = {
  front: "blue",
  back: "green",
};

export class FlashCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: randomCard(),
      side: "front",
    };
  }

  randomCardForDisplay(side) {
    while (true) {
      let card = randomCard();

      if (!_.isEqual(card, this.state.card)) {
        return {
          card: card,
          side: side,
        };
      }
    }
  }

  flipCard() {
    this.setState({
      side: this.state.side === "front" ? "back" : "front",
    });
  }

  render() {
    if (this.props.isHidden) {
      return null;
    }

    return (
      <div>
        <div className="buttons">
          {Object.keys(CARD_COLORS_BY_SIDE).map((side, index) => (
            <Button
              variant="dark"
              onClick={() => {
                this.setState(this.randomCardForDisplay(side));
              }}
              key={index}
            >
              {side.toUpperCase()}
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
          {this.state.card[this.state.side]}
        </div>
      </div>
    );
  }
}