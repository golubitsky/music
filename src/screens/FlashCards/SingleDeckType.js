import React from "react";
import "screens/FlashCards/FlashCards.css";
import FlashCard from "screens/FlashCards/FlashCard";

export default class SingleDeckType extends React.Component {
  render() {
    return (
      <div className='SingleDeckType'>
        <FlashCard {...this.props} />
      </div>
    );
  }
}
