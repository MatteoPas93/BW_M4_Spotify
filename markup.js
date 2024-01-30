import { fetchArtistInfo } from "./api.js";
export{ artistInfo, formatHTMLCard, albumsContainer };

const artistInfo = await fetchArtistInfo();



const formatHTMLCard = (artist) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = `${artist.album.cover}`;
    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    const title = document.createElement("h5");
    title.classList.add("card-title");
    cardBody.appendChild(title);

    const paragraph = document.createElement("p");
    paragraph.classList.add("card-text");
    cardBody.appendChild(paragraph);
    
    const button = document.createElement("a");
    button.classList.add("btn");
    cardBody.appendChild(button);

    return card;

  }


   const albumsContainer = document.getElementById("albums");