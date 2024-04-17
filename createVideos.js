import { connectionAPI } from "./connectionAPI.js";

const form = document.querySelector("[data-form]");

async function createVideo() {
    const title = document.querySelector("#titulo").value;
    const url = document.querySelector("#url").value;
    const imagen = document.querySelector("#imagem").value;
    const description =
        Math.floor(Math.random() * 1000) + " mil visualizaciones";

    await connectionAPI.createVideo(title, url, description, imagen);

    window.location.href = "./envio-concluido.html";
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    createVideo();
});
