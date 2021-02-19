import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import "./App.css";
import { NotesInRandomOrder } from "screens/NotesInRandomOrder";
import { FlashCards } from "screens/FlashCards";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenNames: ["Notes", "Flash Cards"],
      currentScreen: "Flash Cards",
    };
  }

  render() {
    return (
      <div className="wrapper">
        <header className="page-header">Music</header>
        <main className="page-main">
          <NotesInRandomOrder isHidden={this.state.currentScreen !== "Notes"} />
          <FlashCards isHidden={this.state.currentScreen !== "Flash Cards"} />
        </main>
        <footer className="page-footer">
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
        </footer>
      </div>
    );
  }
}

export default App;
