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
          id: 1,
          title: "Need To Know",
          artist:"The Story So Far", 
          album:"Proper Dose"
        },
        {
          id: 2,
          title: "Say It Ain't So",
          artist:"Weezer", 
          album:"Weezer (The Blue Album)"
        },
        {
          id: 3,
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
    this.setState({songs});
  }

  handleDeleteSong(id){
    let songs = this.state.songs;
    let i = songs.findIndex(song => song.id === id);
    songs.splice(i, 1);
    this.setState({songs});
  }

  render() {
    return (
      <div className="App">
          <Playlist name="Sick Beats" songs={this.state.songs} onDelete={this.handleDeleteSong.bind(this)}/>
          <AddSong numSongs={this.state.songs.length} addSong={this.handleAddSong.bind(this)} />
      </div>
    );
  }
}

export default App;
