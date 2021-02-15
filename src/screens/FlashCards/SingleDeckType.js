import React from "react";
import "screens/FlashCards.css";
import FlashCard from "screens/FlashCards/FlashCard";
import SingleDeckTypeOptions from "screens/FlashCards/SingleDeckTypeOptions";
export default class SingleDeckType extends React.Component {
  render() {
    return (
      <div className="SingleDeckType">
        <SingleDeckTypeOptions {...this.props} />
        <FlashCard {...this.props} />
      </div>
    );
  }
}
