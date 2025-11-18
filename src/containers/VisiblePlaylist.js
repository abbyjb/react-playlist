import React, { useEffect} from 'react';
import { connect } from "react-redux";
import { deleteSong, loadSongs } from "../actions/songs";
import Playlist from "../components/Playlist";


const VisiblePlaylist = ({songs, loadSongs, deleteSong}) => {
  useEffect(() => {
    if (songs.length === 0) {
      loadSongs().catch(error => alert(error))
    }
  })
  return (<Playlist playlistName="playlist name" songs={songs} deleteSong={deleteSong}/>);
}


function mapStateToProps(state) {
  return {
    songs: state.songs
  }
}

const mapDispatchToProps = {
  deleteSong,
  loadSongs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisiblePlaylist);
