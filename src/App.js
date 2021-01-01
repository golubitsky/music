import React from "react";
import "./App.css";
import { randomNotes } from "./foundation/randomNoteGenerator.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notes: randomNotes() };
  }

  render() {
    return (
      <div className="App">
        <div
          className="grid"
          onClick={() => {
            this.setState({ notes: randomNotes() });
          }}
        >
          {this.state.notes.map((note, index) => (
            <div className="cell" key={index}>
              <p>{note}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
