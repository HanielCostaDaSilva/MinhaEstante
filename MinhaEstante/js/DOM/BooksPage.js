import {books} from '../../data/databook.js';
import * as Cabecalho from'../components/Cabecalho.js';
Cabecalho.loadHeader()

function insertBook(livro){
    const livroBox=`<div class="livro-container">
                <a href="${livro.linkPage}"> <img src="${livro.image}"></a>
                <p> ${livro.name}</p>
            </div>`
    const corpo= document.getElementById('corpo')
    corpo.insertAdjacentHTML('afterbegin',livroBox)
}

function loadBooks(Livro){
    Livro.map((livro)=> insertBook(livro))
}

loadBooks(books)