import * as actions from "./songs";

describe("song actions", () => {
  it("should create the addSong action", () => {
    const newSong = {
      title: "test song",
      artist: "test artist",
      album: "test album"
    }

    const expectedAction = {
      type: "ADD_SONG_SUCCESS",
      song: newSong
    };

    expect(actions.addSongSuccess(newSong)).toEqual(expectedAction);
  });

  it("should create the deleteSong action", () => {
    const id = id;

    const expectedAction = {
      type: "DELETE_SONG_SUCCESS",
      id: id
    };


    expect(actions.deleteSongSuccess(id)).toEqual(expectedAction);
  });
});
