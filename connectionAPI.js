let url = "http://localhost:3001/videos";

async function getVideos() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error: ", error);
    }
}

async function createVideo(title, link, description, img) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                titulo: title,
                url: link,
                descripcion: description,
                imagem: img,
            }),
        });

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error: ", error);
    }
}

async function findVideo(word) {
    try {
        const response = await fetch(`${url}?q=${word}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error: ", error);
    }
}

export const connectionAPI = {
    getVideos,
    createVideo,
    findVideo,
};
