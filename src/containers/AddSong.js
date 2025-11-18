import React from "react";
import { addSong } from "../actions/songs";
import { connect } from "react-redux";

const AddSong = ({ dispatch }) => {
  let title, album, artist;
  return (
    <div className="container">
      <div className="row">
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
          <div className="form-row">
            <div className="form-group col-lg-2">
              <h5>Add A Song</h5>
            </div>
            <div className="form-group col-lg-3">
              <input
                className="form-control form-control-sm"
                type="text"
                ref={node => (title = node)}
                placeholder="Title"
              />
            </div>
            <div className="form-group col-lg-3">
              <input
                className="form-control form-control-sm"
                type="text"
                ref={node => (artist = node)}
                placeholder="Artist"
              />
            </div>
            <div className="form-group col-lg-3">
              <input
                className="form-control form-control-sm"
                type="text"
                ref={node => (album = node)}
                placeholder="Album"
              />
            </div>
            <div className="form-group col-lg-1">
              <button type="submit" className="btn btn-dark">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect()(AddSong);
