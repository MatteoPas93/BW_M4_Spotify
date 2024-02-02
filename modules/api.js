export { fetchArtistInfo };

const artist = "beyonce";

const fetchArtistInfo = async () => {
    try {
      const res = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`);
      const data = await res.json();
      return data.data;
    } catch (error) {
      console.error('Error:' + error);
      alert(error);
    }
  };
