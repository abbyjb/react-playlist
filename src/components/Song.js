import React, { Component } from 'react';

class Song extends Component {

  constructor() {
    super();
    this.state = {
      selectedSong: {}
    };
  };

  handleClick(){
    let selection = {
      title: this.props.title,
      artist: this.props.artist,
      album: this.props.album
    };
    this.setState({selectedSong: selection});
    
  }
  render() {
    return (
      <div className="Song">
        <tr onClick={this.handleClick.bind(this)}>
          <td id="title">{this.props.title}</td>
          <td id="artist">{this.props.artist}</td>
          <td id="album">{this.props.album}</td>
        </tr>
      </div>
    );
  }
}

export default Song;