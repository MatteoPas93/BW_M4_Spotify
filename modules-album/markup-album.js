import { fetchAlbumByID } from "./api-album.js";
export { id, albumInfo, listTracks, trackTitle, artistName, albumCover, artistPic, formatHTMLListCard };

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const albumInfo = await fetchAlbumByID();



const listTracks = document.getElementById("albumTracks");
const trackTitle = document.getElementById("track-title");
const artistName = document.getElementById("artist-name");
const albumCover = document.getElementById("album-cover");
const artistPic = document.getElementById("artist-pic");

const formatHTMLListCard = (album) => {
    const card = document.createElement("li");
    card.className = "d-flex align-items-center list-group-item border-0 text-white";
    card.style.background = "inherit";

    const text = document.createElement("div");
    text.className = "col-lg-7 ps-2";
    card.appendChild(text);

    const songTitle = document.createElement("h6");
    songTitle.textContent = `${album.title}`;
    text.appendChild(songTitle);

    const artist = document.createElement("p");
    artist.textContent = `${album.artist.name}`;
    text.appendChild(artist);

    const rank = document.createElement("div");
    rank.className = "col-lg-4";
    rank.textContent = `${album.rank}`;
    card.appendChild(rank);

    const duration = document.createElement("div");
    duration.className = "col-lg-1";
    duration.textContent = `${album.duration}`;
    card.appendChild(duration);

    return card;
}