import { id, id1_ } from "./markup-artista.js";
export { fetchArtistByID, fetchAlbumByID };

const fetchArtistByID = async () => {
    try {
      const res = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + id);
      const data = await res.json();
      return data;

    } catch (error) {
      console.error('Error:' + error);
      alert(error);
    }
  };


  const fetchAlbumByID = async (id1) => {
    try {
      const res = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + id1_);
      const data = await res.json();
      return data.tracks.data;

    } catch (error) {
      console.error('Error:' + error);
      alert(error);
    }
  };
