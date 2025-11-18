import { combineReducers } from "redux";
import { createForms } from "react-redux-form";
import songs from "./songs";
const initialSong = {
  title: '',
  artist: '',
  album: '',
  
}
const rootReducer = combineReducers({
  songs,
  ...createForms({
    newSong: initialSong
  })
});

export default rootReducer;
