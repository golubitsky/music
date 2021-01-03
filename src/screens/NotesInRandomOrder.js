import React from "react";
import { Textfit } from "react-textfit";
import "./NotesInRandomOrder.css";
import { randomNotes } from "../foundation/randomNoteGenerator.js";

export class NotesInRandomOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: randomNotes(),
    };
  }

  render() {
    if (this.props.isHidden) {
      return null;
    }

    return (
      <div className="NotesInRandomOrder">
        <div
          className="grid"
          onClick={() => {
            this.setState({ notes: randomNotes() });
          }}
        >
          {this.state.notes.map((note, index) => (
            <Textfit mode="single" className="cell" key={index}>
              {note}
            </Textfit>
          ))}
        </div>
      </div>
    );
  }
}
