import React from "react";

const Song = ({ onClick, title, artist, album }) => (
  <div className="row">
    <p className="col-lg-3 title">{title}</p>
    <p className="col-lg-3 artist">{artist}</p>
    <p className="col-lg-3 album">{album}</p>
    <button type="button" onClick={onClick} className="btn btn-dark">Delete</button>
  </div>
);

export default Song;
