import {insertFooter} from '../components/Rodape';
import {books} from  '../../data/databook.js';
function createCorrespondenceBox(book){
    let correspondencias=document.getElementById('corespondenciaQuantidade')
    correspondencias.innerText= Number(correspondencias.innerText) + 1
 const caixaPesquisada=(`<div class="caixa-pesquisa mx-auto mb-lg-2">
 <div class="capa-box">

     <img class="capa-livro"
         src="../data/${book.image}">
 
 </div>

 <div class="d-grid g-3 mb-3">

     <h3 class="p-3 d-grid g-5 titulo-livro"> ${book.name}<h3>
             <div class='d-flex flex-column mb-3 ms-3 mt-2 informacoes-basicas-livro'>
             <a class="autor-livro"> ${book.author.replace('_',' ')}</a>
             <p class="genero-livro"> ${book.genres.join(', ')}</p>
             <p class="paginas-livro"><span class="quantidade-pagina">${book.pages}</span> páginas </p>
             </div>
 </div>

 <div class="botoes-livro d-grid gap-3 mt-3 p-3 h-50">
     <!--Caixa dos botôes-->
     <button class="btn btn-secondary" type="button">
         <i class="fa-sharp fa-solid fa-heart"></i> Favoritar
     </button>

     <button class="btn btn-secondary dropdown-toggle dropdown" type="button" id="Opcoes"
         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Opções
     </button>

     <div class="dropdown-menu" aria-labelledby="Opcoes">

         <button class="dropdown-item" onclick="adicionarEstante()"> <i class="fa-sharp fa-solid fa-books"></i>
             minha estante</button>
         <button class="dropdown-item" onclick="adicionarListaDesejado()"> <i class="fa-regular fa-eyes"></i>
             desejo </button>
         <button class="dropdown-item" onclick="BuscarAmazon()"> <i class="fa-brands fa-amazon"></i>
             Amazon</button>
     </div>

 </div>

</div>`)

 const shownResults=document.getElementById('Resultados')
 shownResults.insertAdjacentHTML('beforeend',caixaPesquisada)
}

function search_books(){
   const pesquisa = BuscaInput.value
   let correspondencias=document.getElementById('corespondenciaQuantidade')
   correspondencias.innerText= 0 
   const Resultado= document.getElementById('Resultados')
   Resultado.innerHTML=''
   if( pesquisa===''){return null}
   books.filter(book=> book.name.includes(pesquisa.toUpperCase())? createCorrespondenceBox(book): null)
   }

   function handleEvent(event){
      console.log(BuscaInput.value)
      event.preventDefault();
   }

window.handleEvent=handleEvent 
document.getElementById('Enviar').onclick=search_books

/* 
function loadCorrespondence(correspondence){
    correspondence.map((correspondence)=> createCorrespondenceBox(correspondence))
}

loadCorrespondence(books)
*/
insertFooter()

