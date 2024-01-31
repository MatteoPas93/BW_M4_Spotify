import { artistInfo, albumInfo, artistName, artistPic, formatHTMLList, tracksList } from "./markup-artista.js";

const {picture_big, name} = artistInfo;

artistName.textContent = `${name}`;
artistPic.src = `${picture_big}`;
artistPic.classList.add("w-100", "object-fit-cover");

const displayArtistTracks = () => {
albumInfo.map(album => {
    tracksList.appendChild(formatHTMLList(album));
});
};

displayArtistTracks();
