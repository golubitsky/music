import React from "react";
import Button from "react-bootstrap/Button";
import { randomCard } from "../foundation/flashCards.js";
import "./FlashCards.css";

const CARD_COLORS = ["blue", "green"];

export class FlashCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.randomCardForDisplay();
  }

  randomCardForDisplay() {
    let card = randomCard();
    return {
      card: card,
      displayedSide: card.front,
      cardColor: CARD_COLORS[0],
    };
  }

  cardColor() {
    return CARD_COLORS.find((color) => color !== this.state.cardColor);
  }
  flipCard() {
    const c = this.state.card;
    const d = this.state.displayedSide;

    const sideToDisplay = d === c.front ? c.back : c.front;

    this.setState({
      displayedSide: sideToDisplay,
      cardColor: this.cardColor(),
    });
  }

  render() {
    if (this.props.isHidden) {
      return null;
    }

    return (
      <div>
        <Button
          variant="dark"
          onClick={() => {
            this.setState(this.randomCardForDisplay());
          }}
        >
          Next Card
        </Button>
        <div
          className="card"
          onClick={() => this.flipCard()}
          style={{
            backgroundColor: this.state.cardColor,
          }}
        >
          {this.state.displayedSide}
        </div>
      </div>
    );
  }
}
