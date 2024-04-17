import { connectionAPI } from "./connectionAPI.js";

const list = document.querySelector("[data-list]");
const find = document.getElementById("buscar");

function createCard(url, title, description, image) {
    const video = document.createElement("li");
    video.classList.add("videos__item");
    video.innerHTML = `
     <iframe
                    width="100%"
                    height="72%"
                    src="${url}"
                    title="${title}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <div class="descripcion-video">
                    <img src="${image}" alt="logo canal alura" />
                    <h3>${title}</h3>
                    <p>${description}</p>
                </div>
    `;

    return video;
}

async function videos() {
    const data = await connectionAPI.getVideos();

    data.forEach((video) => {
        const { url, titulo, descripcion, imagem } = video;
        const card = createCard(url, titulo, descripcion, imagem);
        list.appendChild(card);
    });
}

videos();

find.addEventListener("input", async function () {
    const word = find.value;
    const data = await connectionAPI.findVideo(word);

    if (data.length === 0) {
        list.innerHTML = `<li class="videos__item">No se encontraron resultados para ${word}</li>`;
        return;
    }

    if (word === "") {
        list.innerHTML = "";
        videos();
        return;
    }

    list.innerHTML = "";
    data.forEach((video) => {
        const { url, titulo, descripcion, imagem } = video;
        const card = createCard(url, titulo, descripcion, imagem);
        list.appendChild(card);
    });
});
