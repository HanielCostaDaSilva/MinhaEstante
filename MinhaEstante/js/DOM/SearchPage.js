import {books} from '../../data/databook.js'
import {loadHeader} from '../components/Cabecalho.js'
import {insertFooter}  from '../components/Rodape.js'
console.log(books)
loadHeader()
insertFooter()

function search_books() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('animals');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}