import { connect } from "react-redux";
import { deleteSong } from "../actions/songs";
import Playlist from "../components/Playlist";

const mapStateToProps = state => ({
  songs: state.songs
});

const mapDispatchToProps = dispatch => ({
  deleteSong: id => dispatch(deleteSong(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
