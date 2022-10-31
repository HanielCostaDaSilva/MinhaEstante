import { usersData } from '../../data/user.js';

function goBack(){
    history.back()
}
function handleSubmit(event){
    event.preventDefault()
}

export function loadHeader() {
    const Cabecalho = (
        `<div class="container" id='Cabecalho'>
    <div class="container">
        <h1 id="Inicial"><i class="fa-solid fa-book-open-reader"></i> Minha Estante</h1>
         
    </div>
                
    <form method="post" onsubmit='handleSubmit(event)'>
                
        <div class="container" id="Pesquisar">
            
            <button type="submit" onclick='Search()' id='Enviar'><i class="fa-solid fa-magnifying-glass"></i></button>
                    
            <input id='BuscaInput' type="text" autocomplete="off" size="50%" placeholder="Título do Livro ou Nome do(a) Autor(a)">
            
        </div>
 
    </form> 
    
    <div class="dropdown">
        <div class="container">
            <img class="dropelon usuarioFoto"src="${usersData[1].userPhoto}"> 
            <p class="usuarioNome">${usersData[1].username}</p>
        </div>
        <div class="dropdown-content">
            <a href="../SearchPage.html">Pesquisar Livros</a>
            <a href="dicas.html">Dicas</a>
            <a href="#">Ajuda</a>
            <a href="#"> Sobre nós</a>
            
        </div>               
    </div>     
</div>`
    )
    const header = document.querySelector('header')
    header.insertAdjacentHTML('afterbegin', Cabecalho);
    document.getElementById("Inicial").onclick = function() {goBack()}
}
