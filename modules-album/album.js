import {albumInfo, listTracks, trackTitle, artistName, albumCover, artistPic, formatHTMLListCard} from "./markup-album.js";

const displayAlbumInfo = () => {
    albumInfo.map( album => {
     trackTitle.textContent = `${album.title}`;   
     artistName.textContent = `${album.album.title}`;
     albumCover.src = `${album.album.cover_medium}`;
     artistPic.src = `${album.album.cover_small}`;
     listTracks.appendChild(formatHTMLListCard(album));
    });
};

displayAlbumInfo();




