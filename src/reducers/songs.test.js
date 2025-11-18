import songs from "./songs";

describe("songs reducer", () => {
  let state = [];
  beforeEach(() => {
    state = [
      {
        id: 0,
        title: "hello goodbye",
        artist: "Volumes",
        album: "Coming Clean"
      },
      {
        id: 1,
        title: "Philospher King",
        artist: "Dance Gavin Dance",
        album: "Mothership"
      }
    ];
  });

  it("should return unmodified state on undefined action type", () => {
    const undefinedAction = {
        type: "UNDEFINED_ACTION",
        text: "undefined"
    }

    expect(songs(state, undefinedAction)).toEqual(state);
  });

  it("should modify state correctly when adding a song", () => {
    let nextSongId = 1;
    const addSongAction = {
      type: "ADD_SONG_SUCCESS",
      song: {
        title: "Shelf Life",
        artist: "Dance Gavin Dance",
        album: "Artifical Selection"
      }
    };

    const newState = [
      ...state ,
      {
        id: 2,
        title: addSongAction.song.title,
        artist: addSongAction.song.artist,
        album: addSongAction.song.album
      }
    ];

    expect(songs(state, addSongAction)).toEqual(newState);
  });

  it("should modify state correctly when deleting a song", () => {
    const deleteSongAction = {
      type: "DELETE_SONG_SUCCESS",
      id: 0
    };

    const newState = [
      {
        id: 1,
        title: "Philospher King",
        artist: "Dance Gavin Dance",
        album: "Mothership"
      }
    ];

    expect(songs(state, deleteSongAction)).toEqual(newState);
  });
});
