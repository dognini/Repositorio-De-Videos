import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

const btnPesquisar = document.querySelector('[data-btnPesquisar]');

async function buscarVideo (event) {
    event.preventDefault();

    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const lista = document.querySelector("[data-lista]");

    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    busca.forEach(element => lista.appendChild(
        constroiCard(element.titulo, element.descricao, element.url, element.imagem)

    ));

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);

    }
}

btnPesquisar.addEventListener('click', event => buscarVideo(event));