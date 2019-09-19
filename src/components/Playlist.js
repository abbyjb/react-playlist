import React from "react";
import Song from "./Song";

const Playlist = ({ playlistName, songs, deleteSong }) => (
  <div>
    <h1>{playlistName}</h1>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {songs.map(song => (
          <Song
            key={song.id}
            {...song}
            onClick={() => deleteSong(song.id)}
          ></Song>
        ))}
      </tbody>
    </table>
  </div>
);

export default Playlist;
