import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import "./App.css";
import { NotesInRandomOrder } from "./screens/NotesInRandomOrder.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenNames: ["Notes", "Flash Cards"],
      currentScreen: "Notes",
    };
  }

  render() {
    return (
      <div className="App">
        <NotesInRandomOrder isHidden={this.state.currentScreen !== "Notes"} />
        <div className="Footer">
          {this.state.screenNames.map((nameOfScreen, index) => (
            <Button
              variant="dark"
              onClick={() => {
                this.setState({ currentScreen: nameOfScreen });
              }}
              key={index}
            >
              {nameOfScreen}
            </Button>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
