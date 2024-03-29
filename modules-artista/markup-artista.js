import { fetchArtistByID, fetchAlbumByID } from "./api-artista.js";
export { id, id1_, artistInfo, albumInfo, artistName, artistPic, formatHTMLList, tracksList };

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const id1_ = params.get("id1");

const artistInfo = await fetchArtistByID();
const albumInfo = await fetchAlbumByID();
console.log(albumInfo);


const artistName = document.getElementById("artist-name");
const artistPic = document.getElementById("artist-cover");
const tracksList = document.getElementById("displayTracks");

const formatHTMLList = (album) => {
    const card = document.createElement("li");
    card.classList.add("d-flex", "gap-2", "align-items-center", "my-2", "list-group-item", "text-white", "border-0");
    card.style.background = "inherit";

    const img = document.createElement("img");
    img.src = `${album.album.cover}`;
    img.style.width = "60px";
    card.appendChild(img);

    const title = document.createElement("p");
    title.style.color = "white";
    title.textContent = `${album.title}`;
    card.appendChild(title);

    const duration = document.createElement("p");
    duration.textContent = `${album.duration}`;
    duration.style.color = "white";
    card.appendChild(duration);

    return card;
};