const MOCK_STATE = [
  {
    id: 0, 
    title: "Test Song",
    artist: "Test Artist",
    album: "Test Album"
  }
]


export default function songs(state = MOCK_STATE, action) {
  switch (action.type) {
    case "ADD_SONG":
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          title: action.title,
          artist: action.artist,
          album: action.album
        }
      ];
    case "DELETE_SONG":
      return state.filter(song => song.id !== action.id);
    default:
      return state;
  }
}
