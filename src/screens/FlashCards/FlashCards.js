import React from "react";
import DeckSelection from "screens/FlashCards/DeckSelection";
import { randomDeck, randomCard } from "foundation/flashCards";
import "screens/FlashCards/FlashCards.css";

const CARD_COLORS_BY_SIDE = {
  front: "blue",
  back: "green",
};

export class FlashCards extends React.Component {
  constructor(props) {
    super(props);
    let deck = randomDeck();
    this.state = {
      nextCardSide: "front",
      card: randomCard({ deck: deck }),
      deck: deck,
      side: "front",
      notesAreShuffled: false,
    };

    // This binding is necessary to make `this` work in the callback
    this.toggleNextCardFace = this.toggleNextCardFace.bind(this);
    this.toggleNotesAreShuffled = this.toggleNotesAreShuffled.bind(this);
    this.showRandomCard = this.showRandomCard.bind(this);
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
      card: randomCard({
        deck: deck,
        previousCard: this.state.card,
        notesAreShuffled: this.state.notesAreShuffled,
      }),
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

  toggleNotesAreShuffled() {
    this.setState({ notesAreShuffled: !this.state.notesAreShuffled });
  }

  render() {
    if (this.props.isHidden) {
      return null;
    }

    return (
      <div className="FlashCards">
        <DeckSelection
          showRandomCard={this.showRandomCard}
          toggleNotesAreShuffled={this.toggleNotesAreShuffled}
          notesAreShuffled={this.state.notesAreShuffled}
        />
        <div
          className="card"
          onClick={() => this.handleCardClick()}
          style={{
            backgroundColor: CARD_COLORS_BY_SIDE[this.state.side],
          }}
        >
          <span className="card-deck">{this.state.deck.displayName}</span>
          <span className="card-content">
            {this.state.card[this.state.side]}
          </span>
        </div>
        <div className="card-option-container">
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
