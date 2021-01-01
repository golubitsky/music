import React from "react";
import "./App.css";
import { randomNotes } from "./foundation/randomNoteGenerator.js";

function App() {
  return (
    <div className="App">
      <div className="grid">
        {randomNotes().map((note, index) => (
          <div className="cell" key={index}>
            <p>{note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
