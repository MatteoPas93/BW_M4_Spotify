import { id } from "./markup-album.js"
export {fetchAlbumByID};


const fetchAlbumByID = async () => {
    try {
      const res = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + id);
      const data = await res.json();
      return data.tracks.data;

    } catch (error) {
      console.error('Error:' + error);
    //   alert(error);
    }
  };