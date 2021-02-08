import React from "react";
import Button from "react-bootstrap/Button";
import {
  randomCard,
  DECKS,
  AVAILABLE_DECKS,
} from "../foundation/flashCards.js";
import "./FlashCards.css";

const _ = require("lodash");

const CARD_COLORS_BY_SIDE = {
  front: "blue",
  back: "green",
};

export class FlashCards extends React.Component {
  constructor(props) {
    super(props);
    let deck = _.sample(DECKS);
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

  nameOfDeck(deck) {
    return _.last(deck);
  }

  render() {
    if (this.props.isHidden) {
      return null;
    }

    return (
      <div className="FlashCards">
        <div className="deck-selection">
          {_.uniq(AVAILABLE_DECKS.map((deck) => deck.type)).map(
            (deckType, outerIndex) => (
              <div className="deck-selection-row" key={outerIndex}>
                <span
                  className="deck-selection-row-header"
                  key={outerIndex + 10}
                >
                  {deckType}
                </span>
                <div className="buttons" key={outerIndex + 20}>
                  {AVAILABLE_DECKS.filter((deck) => deck.type === deckType).map(
                    (deck, innerIndex) => (
                      <Button
                        variant="dark"
                        onClick={() => {
                          this.showRandomCard([deck.type, deck.subType]);
                        }}
                        key={innerIndex}
                      >
                        {deck.displayName}
                      </Button>
                    )
                  )}
                </div>
                {deckType === "seventhChords" && (
                  <div className="card-options">
                    <label>
                      Shuffle Notes
                      <input
                        name="notesAreShuffled"
                        type="checkbox"
                        checked={this.state.notesAreShuffled}
                        onChange={this.toggleNotesAreShuffled}
                      />
                    </label>
                  </div>
                )}
              </div>
            )
          )}
        </div>

        <div
          className="card"
          onClick={() => this.handleCardClick()}
          style={{
            backgroundColor: CARD_COLORS_BY_SIDE[this.state.side],
          }}
        >
          <span className="card-deck">{this.nameOfDeck(this.state.deck)}</span>
          <span className="card-content">
            {this.state.card[this.state.side]}
          </span>
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
