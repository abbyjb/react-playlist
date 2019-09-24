
export default function songs(state = [], action) {
  switch (action.type) {
    case "LOAD_SONGS_SUCCESS":
      return action.songs;
    case "ADD_SONG_SUCCESS":
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          title: action.song.title,
          artist: action.song.artist,
          album: action.song.album
        }
      ];
    case "UPDATE_SONG_SUCCESS":
      return state.map((song) => action.id === song.id ? song = action.song : song);
    case "DELETE_SONG_SUCCESS":
      return state.filter(song => song.id !== action.id);
    default:
      return state;
  }
}

