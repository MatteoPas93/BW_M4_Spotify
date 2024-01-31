import { fetchArtistInfo } from "./api.js";
export{ artistInfo, formatHTMLCard, albumsContainer };

const artistInfo = await fetchArtistInfo();



const formatHTMLCard = (artist) => {
    const card = document.createElement("div");
    card.classList.add("card", "col-lg-2", "p-0");
    card.style.color = "black";
    card.setAttribute("id", `${artist.id}`);

    const img = document.createElement("img");
    img.classList.add("card-img-top", "w-100", "p-3");
    img.src = `${artist.album.cover}`;
    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    const artistName = document.createElement("a");
    artistName.classList.add("card-title", "d-block", "fw-5", "link-underline", "link-underline-opacity-0");
    artistName.textContent = `${artist.artist.name}`;
    artistName.href = `./artista.html?id=${artist.artist.id}&id1=${artist.album.id}`;
    artistName.style.color = "white";
    cardBody.appendChild(artistName);

    const title = document.createElement("a");
    title.classList.add("card-text", "d-block", "link-underline", "link-underline-opacity-0");
    title.textContent = `${artist.title}`;
    title.href = `./album.html?id=${artist.album.id}`;
    title.style.color = "white";
    cardBody.appendChild(title);

    return card;

  }


   const albumsContainer = document.getElementById("albums");
   albumsContainer.classList.add("row", "my-5", "px-4", "gap-4", "justify-content-center", "w-100")