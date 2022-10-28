import{books} from '../../data/databook.js';
import{Authors} from '../../data/dataAuthor.js';
import * as Cabecalho from'../components/Cabecalho.js';
import * as FinalPage from '..components/Cabecalho.js'  // Fazer logo o Footer


function loadBook(books){
    books.map((book)=> InsertBookNews(book))
    }

function InsertBookNews(book){
    
    const newBook = (`
        <div class="item item-livro"> 
                <a href='${book.linkPage}'>
                    <img class="box-carousel box-livros" src="../data/${book.image}" alt="${book.name}" srcset="">
                <p> ${book.name} </p>
                </a>
        </div>
        `)
  const carrosselLivrosNovidades = document.querySelector('#NewsBooksCarousel');
  carrosselLivrosNovidades.insertAdjacentHTML('afterbegin', newBook);


}
function loadAuthors(Authors){
    Authors.map((author) => insertAuthorsNew(author))
}

function insertAuthorsNew(author){
    const newAuthor=`
    <div class="item item-autor">
        <a href="${author.linkPage}">
            <img class="box-carousel box-autores" src="../data/${author.image}" alt="${author.name}" srcset=""> 
            <p> ${author.name}</p>
        </a>
    </div>`
    const carrosselAtoresNovidades = document.getElementById('NewsAuthorsCarousel');
    carrosselAtoresNovidades.insertAdjacentHTML('afterbegin', newAuthor);

}

loadBook(books);
Cabecalho.loadHeader();
loadAuthors(Authors);
console.log('Aqui está funcinando')