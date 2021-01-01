import React from "react";
import { randomCard } from "../foundation/flashCards.js";
import "./FlashCards.css";

export class FlashCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: randomCard(),
    };
  }

  render() {
    if (this.props.isHidden) {
      return null;
    }

    return (
      <div className="card">
        <div
          onClick={() => {
            console.log("hi");
          }}
        >
          {this.state.card.front}
        </div>
      </div>
    );
  }
}
