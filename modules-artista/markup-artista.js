import { fetchArtistByID, fetchAlbumByID } from "./api-artista.js";
export { id, id1, artistInfo, albumInfo, formatHTMLList, tracksList };

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const id1 = params.get("id1");

const artistInfo = await fetchArtistByID();
const albumInfo = await fetchAlbumByID();
console.log(albumInfo);

const {picture, name} = artistInfo;

const tracksList = document.getElementById("displayTracks");

const formatHTMLList = (album) => {
    const card = document.createElement("li");
    card.classList.add("d-flex", "gap-2", "align-items-center", "my-2", "list-group-item", "text-white", "border-0");
    card.style.background = "black";

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