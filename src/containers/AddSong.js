import React from "react";
import { addSong } from "../actions/songs";
import { connect } from "react-redux";

const AddSong = ({ dispatch }) => {
  let title, album, artist;
  return (
    <div className="AddSong">
      <h3>Add A Song</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (title.value && artist.value && album.value) {
            dispatch(addSong(title.value, artist.value, album.value));
          } else {
            alert("You are missing information needed to add a song");
          }

          title.value = "";
          artist.value = "";
          album.value = "";
        }}
      >
        <input type="text" ref={node => (title = node)} placeholder="Title" />
        <input type="text" ref={node => (artist = node)} placeholder="Artist" />
        <input type="text" ref={node => (album = node)} placeholder="Album" />
        <input type="submit" id="submit" value="Add" />
      </form>
    </div>
  );
};

export default connect()(AddSong);
