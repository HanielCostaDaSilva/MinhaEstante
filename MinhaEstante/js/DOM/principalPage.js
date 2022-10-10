import{books} from '../../data/databook.js';
import {loadHeader} from '../components/Cabecalho.js';

function loadBook(books){
    books.map((book)=> InsertBookNews(book))
    }


function InsertBookNews(book){
    const newBook = (
      `<div class="item item-livro" > 
            <a href="#">
                <img class="box-carrosel box-livros" src="../data/${book.image}" alt="${book.name}" srcset="">
                <p>${book.name}</p>
            </a>
        </div>`)
  const carrosselNovidades = document.querySelector('#NewsBookCarrosusel');
  carrosselNovidades.insertAdjacentHTML('beforebegin', newBook);


}
 
loadBook(books);
loadHeader()
//loadAuthors()
console.log('Aqui está funcinando')