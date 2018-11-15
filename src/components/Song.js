import React, { Component } from 'react';

class Song extends Component {
  deleteSong(id){
    this.props.onDelete(id);
  }
  render() {
    return (
      <div className="Song">
        <tr>
          <td id="title">{this.props.title}</td>
          <td id="artist">{this.props.artist}</td>
          <td id="album">{this.props.album}</td>
          <td><input id="delete" type="button" value="Delete" onClick={this.deleteSong.bind(this, this.props.id)}/></td>
        </tr>
      </div>
    );
  }
}

export default Song;