import React from "react";
import { Form, Control, actions} from "react-redux-form";
import { saveSong } from "../actions/songs";
import { connect } from "react-redux";

const AddSong = ({ dispatch }) => {

  function handleSubmit(song){
    if(song.title && song.artist && song.album) {
      dispatch(saveSong(song));
    }
    else{
      alert("you have missing information needed in a song");
    }

    dispatch(actions.reset("newSong"));
  }
  return (
    <div className="container">
      <div className="row">
        <Form model="newSong" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-lg-2">
              <p>Add A Song</p>
            </div>

            <div className="form-group col-lg-2">
              <Control.text
                className="form-control form-control-sm"
                model="newSong.title"
              />
            </div>
            <div className="form-group col-lg-2">
              <Control.text
                className="form-control form-control-sm"
                model="newSong.artist"
              />
            </div>
            <div className="form-group col-lg-2">
              <Control.text
                className="form-control form-control-sm"
                model="newSong.album"
              />
            </div>
            <div className="form-group col-lg-2">
            <button type="submit" className="btn btn-dark">
              Add
            </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default connect()(AddSong);
