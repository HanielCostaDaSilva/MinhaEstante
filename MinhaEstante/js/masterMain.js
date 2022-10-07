import books from "data/databook.js";

const main = document.querySelector('main')


function createBook(nome,image,autor){
    `<div class="item item-livro" > 
                            <a  href="#">
                                <img class="box-carrosel box-livros" src="pages/img/livros/capa-Triste-Fim-De-Policarpo-Quaresma.jpg" alt="capa-Triste-Fim-De-Policarpo-Quaresma" srcset=""><p>O TRISTE FIM 
                                    DE POLICARPO DE QUARESMA</p></a>
                        </div>`

};

function loadBook(nome,image,autor){
    for (book of books){
        createBook(book.name,book.image,book.autor)
    }
}