import * as songsApi from "../api/songsApi";
import { beginApiCall, apiCallError } from "./apiActions";

export function loadSongsSuccess(songs) {
  return {
    type: "LOAD_SONGS_SUCCESS",
    songs
  };
}

export function addSongSuccess(song) {
  return {
    type: "ADD_SONG_SUCCESS",
    song
  };
}

export function updateSongSuccess(song) {
  return {
    type: "UPDATE_SONG_SUCCESS",
    song
  };
}

export function deleteSongSuccess(id) {
  return {
    type: "DELETE_SONG_SUCCESS",
    id
  };
}

export function loadSongs() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return songsApi.loadSongs()
    .then(songs =>{
      dispatch(loadSongsSuccess(songs));
    })
    .catch(error => {
      dispatch(apiCallError());
      throw error
    });
  }
}

export function saveSong(song) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return songsApi.saveSong(song)
    .then(savedSong => {
      song.id ? 
        dispatch(updateSongSuccess(savedSong)) :
        dispatch(addSongSuccess(savedSong))
    })
    .catch(error => {
      dispatch(apiCallError());
      throw error
    });
  }
}

export function deleteSong(song){
  return function(dispatch) {
    dispatch(beginApiCall());
    return songsApi.removeSong(song.id)
    .then((deletedSong) => {
      dispatch(deleteSongSuccess(song.id));
    })
    .catch(error => {
      dispatch(apiCallError());
      throw error
    });
  }
}