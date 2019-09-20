import * as actions from "./songs";

describe("song actions", () => {
  it("should create the addSong action", () => {
    const title = "Test Song";
    const artist = "Test Artist";
    const album = "Test Album";

    const expectedAction = {
      type: "ADD_SONG",
      title: title,
      artist: artist,
      album: album
    };

    expect(actions.addSong(title, artist, album)).toEqual(expectedAction);
  });

  it("should create the deleteSong action", () => {
    const id = id;

    const expectedAction = {
      type: "DELETE_SONG",
      id: id
    };

    expect(actions.deleteSong(id)).toEqual(expectedAction);
  });
});
