import {conectaApi} from "./conectaApi.js";

const lista = document.querySelector('[data-lista]');
const btnDelete = document.getElementById('btnDelete')

export default function constroiCard(titulo, descricao, url, imagem) {
    const videos = document.createElement('li');

    videos.className = 'videos__item'
    videos.innerHTML += 
        `
            <iframe
                width="100%" 
                height="72%" 
                src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>
        `
        
    return videos;
}

async function listaVideosApi() {

    try {
        const listaApi = await conectaApi.listaVideos();
        
        listaApi.forEach(e => lista.appendChild(
        constroiCard(e.titulo, e.descricao, e.url, e.imagem)));

    } catch {
        lista.innerHTML += `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeo</h2>`
    }

}

listaVideosApi();