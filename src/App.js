import React, { Component } from 'react';
import './App.css';
import Playlist from './components/Playlist';
import AddSong from './components/AddSong'
class App extends Component {
  constructor () {
    super();
    this.state = {
      songs: [
        {
          title: "Need To Know",
          artist:"The Story So Far", 
          album:"Proper Dose"
        },
        {
          title: "Say It Ain't So",
          artist:"Weezer", 
          album:"Weezer (The Blue Album)"
        },
        {
          title: "Line",
          artist:"The Story So Far", 
          album:"Proper Dose"
        }
      ]
    }
  };

  handleAddSong(newSong) {
    let songs = this.state.songs;
    songs.push(newSong);
    this.setState({songs: songs});
  }

  render() {
    return (
      <div className="App">
          <Playlist name="Sick Beats" songs={this.state.songs}/>
          <AddSong addSong={this.handleAddSong.bind(this)} />
      </div>
    );
  }
}

export default App;
