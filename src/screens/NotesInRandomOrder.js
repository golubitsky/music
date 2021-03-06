import React from "react";
import "screens/NotesInRandomOrder.css";
import { randomNotes } from "foundation/randomNoteGenerator";

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
            <div className="cell" key={index}>
              {note}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
