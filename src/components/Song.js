import React from "react";

const Song = ({ onClick, title, artist, album }) => (
  <tr>
    <td id="title">{title}</td>
    <td id="artist">{artist}</td>
    <td id="album">{album}</td>
    <td>
      <input id="delete" type="button" value="Delete" onClick={onClick} />
    </td>
  </tr>
);

export default Song;
