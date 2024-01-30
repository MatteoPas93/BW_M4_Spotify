import { artistInfo, albumInfo, formatHTMLList, tracksList } from "./markup-artista.js";


const displayArtistTracks = () => {
albumInfo.map(album => {
    tracksList.appendChild(formatHTMLList(album));
});
};

displayArtistTracks();
