import React from "react";
import Song from "./Song";

const Playlist = ({ playlistName, songs, deleteSong }) => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="playlist-name col-lg-4">{playlistName}</div>
    </div>
    {songs.map(song => (
      <Song key={song.id} {...song} onClick={() => deleteSong(song.id)}></Song>
    ))}
  </div>
);

export default Playlist;
