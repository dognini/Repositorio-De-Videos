import {conectaApi} from "../js/conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(event) {
    event.preventDefault();

    const imagem = document.querySelector("[data-imagem").value;
    const url  = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();

    try {
        await conectaApi.criaVideo(titulo, descricao, url, imagem);

        window.location.href = "../pages/envio-concluido.html";

    } catch (event) {
        console.log(event)
        alert(event);
    } 
}

formulario.addEventListener("submit", event => criarVideo(event))