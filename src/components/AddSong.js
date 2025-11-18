import React, { Component } from 'react';

class AddSong extends Component {
    constructor() {
        super();
        this.state = {
            newSong:{}
        };
    };


  handleSubmit(e) {
      if(this.refs.title.value && this.refs.artist.value && this.refs.album.value) {
        this.setState({
            newProject: {
                title: this.refs.title.value,
                artist: this.refs.artist.value,
                album: this.refs.album.value
            }
        }, function(){
            this.props.addSong(this.state.newProject);
        });
      }
      else {
          alert("You are missing information needed to add a song");
      }

      this.refs.title.value = "";
      this.refs.artist.value = "";
      this.refs.album.value = "";

      e.preventDefault();
  }


  render() {
    return (
      <div className="AddSong">
        <h3>Add A Song</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" ref="title" placeholder="Title" />
            <input type="text" ref="artist" placeholder="Artist" />
            <input type="text" ref="album" placeholder="Album" />
            <input type="submit" id="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default AddSong;