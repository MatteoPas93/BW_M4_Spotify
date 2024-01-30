import { fetchArtistInfo } from "./api.js";
export{ artistInfo, formatHTMLCard, albumsContainer };

const artistInfo = await fetchArtistInfo();



const formatHTMLCard = (artist) => {
    const card = document.createElement("div");
    card.classList.add("card", "col-lg-2", "bg-dark", "p-0");
    card.setAttribute("id", `${artist.id}`);

    const img = document.createElement("img");
    img.classList.add("card-img-top", "w-100", "p-3");
    img.src = `${artist.album.cover}`;
    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    const title = document.createElement("h6");
    title.classList.add("card-title");
    title.textContent = `${artist.title}`;
    title.style.color = "white";
    cardBody.appendChild(title);

    const paragraph = document.createElement("p");
    paragraph.classList.add("card-text");
    paragraph.textContent = `${artist.title_short}`;
    paragraph.style.color = "white";
    cardBody.appendChild(paragraph);

    const artistBtn = document.createElement("a");
    artistBtn.classList.add("btn");
    artistBtn.style.color = "white";
    artistBtn.textContent = "Artist";
    artistBtn.href = `./artista.html?id=${artist.artist.id}`;
    cardBody.appendChild(artistBtn);

    const albumBtn = document.createElement("a");
    albumBtn.classList.add("btn");
    albumBtn.style.color = "white";
    albumBtn.textContent = "Album";
    albumBtn.href = `./artista.html?id=${artist.album.id}`;
    cardBody.appendChild(albumBtn);

    return card;

  }


   const albumsContainer = document.getElementById("albums");
   albumsContainer.classList.add("row", "my-5", "px-4", "gap-4", "justify-content-center", "w-100")