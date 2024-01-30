import { fetchArtistByID } from "./api-artista.js";
export { id, artistInfo };

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const artistInfo = await fetchArtistByID();