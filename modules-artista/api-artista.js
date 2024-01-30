import { id } from "./markup-artista.js";
export { fetchArtistByID };

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