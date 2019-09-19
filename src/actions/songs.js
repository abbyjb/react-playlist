let nextSongId = 0;
export function addSong(title, artist, album) {
  return {
    type: "ADD_SONG",
    id: nextSongId++,
    title,
    artist,
    album
  };
}

export function deleteSong(id) {
  return {
    type: "DELETE_SONG",
    id
  };
}
