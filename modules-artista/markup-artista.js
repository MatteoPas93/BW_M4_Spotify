import { fetchArtistByID, fetchAlbumByID } from "./api-artista.js";
export { id, id1, artistInfo, albumInfo, formatHTMLList, tracksList };

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const id1 = params.get("id1");

console.log(id1)

const artistInfo = await fetchArtistByID();
const albumInfo = await fetchAlbumByID();
console.log(albumInfo);

albumInfo.map(album => {
    console.log(album.title, album.album.cover, album.duration.toString())
})

const {picture, name} = artistInfo;
console.log(picture, name);

const tracksList = document.getElementById("displayTracks");

const formatHTMLList = (album) => {
    const card = document.createElement("li");
    card.classList.add("d-flex");

    const img = document.createElement("img");
    img.src = `${album.album.cover}`;
    card.appendChild(img);

    const title = document.createElement("p");
    title.style.color = "white";
    title.textContent = `${album.title}`;
    card.appendChild(title);

    const duration = document.createElement("span");
    duration.textContent = `${album.duration}`;
    duration.style.color = "white";
    card.appendChild(duration);

    return card;
};