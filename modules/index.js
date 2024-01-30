import { artistInfo, formatHTMLCard, albumsContainer } from "./markup.js";

const artistAlbumInfo = () => {
    artistInfo.map(artist => {
        albumsContainer.appendChild(formatHTMLCard(artist)); 
    });
    };

artistAlbumInfo();