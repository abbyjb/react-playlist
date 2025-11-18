import React, { Component } from 'react';
import Song from './Song';


class Playlist extends Component {
  
  render() {
    let songs;
    if(this.props.songs) {
      songs = this.props.songs.map(song =>{
        return ( <Song title={song.title} artist={song.artist} album={song.album} />);
      });
    }
    return ( 
      <div className="Playlist">
          <h1>{this.props.name}</h1>
          <table>
            <tr>    
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
            </tr>
            {songs}
          </table>
      </div>
    );
  }
}

export default Playlist;
