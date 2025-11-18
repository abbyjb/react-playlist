
import React, { Component } from "react";
import "./App.scss";
import VisiblePlaylist from "./containers/VisiblePlaylist";
import AddSong from "./components/AddSong";

class App extends Component {
  render() {
    return (
      <div className="App">
        <VisiblePlaylist />
        <AddSong />
      </div>
    );
  }
}

export default App;
