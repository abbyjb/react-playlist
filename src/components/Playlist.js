import React, { Component } from 'react';
import Song from './Song';


class Playlist extends Component {
  deleteSong(id) {
    this.props.onDelete(id);
  }

  render() {
    let songs;
    if(this.props.songs) {
      songs = this.props.songs.map(song =>{
        return (<Song onDelete={this.deleteSong.bind(this)} id={song.id} title={song.title} artist={song.artist} album={song.album} />);
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
                <th></th>
            </tr>
            {songs}
          </table>
      </div>
    );
  }
}

export default Playlist;
