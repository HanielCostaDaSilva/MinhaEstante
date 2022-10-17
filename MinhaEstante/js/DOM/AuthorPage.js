import { Authors } from '../../data/dataAuthor.js';
import * as Cabecalho from '../components/Cabecalho.js';
import { insertFooter } from '../components/Rodape.js';

function insertAuthor(author) {
    const authorBox = `<div class="author-container">
                <a href="${author.linkPage}"> <img src="../../data/${author.image}"></a>
                <p> ${(author.name.split('_').join(' '))}</p>
            </div>`
    const corpo = document.getElementById('corpo')
    corpo.insertAdjacentHTML('afterbegin', authorBox)
}

function loadAuthors(Livro) {
    Livro.map((author) => insertAuthor(author))
}

loadAuthors(Authors)

Cabecalho.loadHeader()
insertFooter()
