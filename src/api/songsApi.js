
import fetch from 'cross-fetch';
const baseUrl = process.env.REACT_APP_API_URL + "/songs";

export function loadSongs() {
  return fetch(baseUrl, {headers: {"content-type": "application/json"}})
    .then(response => {return response.json()})
    .catch(error => console.error("API call failed. " + error));
}

export function saveSong(song) {
  console.log("call here");
  return fetch(baseUrl + "/" + (song.id || ""), {
    method: song.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(song)
  })
  .then(response => { return response.json();} )
  .catch(error => console.error("API call failed. " + error));
}

export async function removeSong(id) {
  return fetch(baseUrl + "/" + id, {method: 'DELETE'})
  .then(response => { return response.json(); } )
  .catch(error => console.error("API call failed. " + error));
}
