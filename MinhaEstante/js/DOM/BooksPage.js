import {books} from '../../data/databook.js'
import {loadHeader} from'../components/Cabecalho.js';
import { insertFooter } from '../components/Rodape.js';

function insertBook(livro){
    const livroBox=(`<div class="livro-container">
    <a href="${livro.linkPage}"> <img src="../../data/${livro.image}"></a>
    <p> ${(livro.name.split('_').join(' '))}</p>
    </div>`)
    const corpo= document.getElementById('corpo')
    corpo.insertAdjacentHTML('afterbegin',livroBox)
}

function loadbooks(Livro){
    Livro.map((livro)=> insertBook(livro))
}


loadHeader()
loadbooks(books)
insertFooter()