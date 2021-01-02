import React from "react";
import Button from "react-bootstrap/Button";
import { randomCard } from "../foundation/flashCards.js";
import "./FlashCards.css";

export class FlashCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.randomCardForDisplay();
  }

  randomCardForDisplay() {
    let card = randomCard();
    return { card: card, displayedSide: card.front };
  }

  flipCard() {
    let c = this.state.card;
    let d = this.state.displayedSide;

    const sideToDisplay = d === c.front ? c.back : c.front;

    this.setState({ displayedSide: sideToDisplay });
  }

  render() {
    if (this.props.isHidden) {
      return null;
    }

    return (
      <div>
        <div className="card" onClick={() => this.flipCard()}>
          {this.state.displayedSide}
        </div>
        <Button
          variant="dark"
          onClick={() => {
            this.setState(this.randomCardForDisplay());
          }}
        >
          Next Card
        </Button>
      </div>
    );
  }
}
