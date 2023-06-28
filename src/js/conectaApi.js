const urlDaApi = 'http://localhost:3000/videos';

async function listaVideos() {

    const conexao = await fetch(urlDaApi, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {

    const conexao = await fetch(urlDaApi, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },

        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil vizualizações`,
            url: url,
            imagem: imagem
        })
    })

    return conexao;
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();

    console.log(conexaoConvertida);

    return conexaoConvertida;
}

export const conectaApi = { listaVideos, criaVideo, buscaVideo }