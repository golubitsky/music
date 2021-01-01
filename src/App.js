import React from "react";
import "./App.css";
import { NotesInRandomOrder } from "./screens/NotesInRandomOrder.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NotesInRandomOrder />
      </div>
    );
  }
}

export default App;
