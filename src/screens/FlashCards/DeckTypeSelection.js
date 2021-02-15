import React from "react";
import Button from "react-bootstrap/Button";
import { decks } from "services/flashCards";
import "screens/FlashCards.css";

export default class DeckTypeSelection extends React.Component {
  render() {
    return (
      <div className="DeckSelection">
        {decks({ type: "onePerType" }).map((deck, index) => (
          <Button
            variant="dark"
            onClick={() => {
              this.props.showRandomCard(deck);
            }}
            key={index}
          >
            {deck.type}
          </Button>
        ))}
      </div>
    );
  }
}
