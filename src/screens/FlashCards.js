import React from "react";
import Button from "react-bootstrap/Button";
import { randomCard } from "../foundation/flashCards.js";
import "./FlashCards.css";

const CARD_COLORS = {
  front: "blue",
  back: "green",
};

export class FlashCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.randomCardForDisplay("front");
  }

  randomCardForDisplay(side) {
    let card = randomCard();
    return {
      card: card,
      side: side,
    };
  }

  cardColor() {
    return CARD_COLORS[this.state.side];
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
          {["front", "back"].map((side, index) => (
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
            backgroundColor: this.cardColor(),
          }}
        >
          {this.state.card[this.state.side]}
        </div>
      </div>
    );
  }
}
