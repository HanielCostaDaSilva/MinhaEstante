import { usersData } from '../../data/user.js';

export function loadHeader() {
    const Cabecalho = (
        `<div class="container" id='Cabecalho'>
    <div class="container">
        <h1 id="Inicial" onclick="GoBack()"><i class="fa-solid fa-book-open-reader"></i> Minha Estante</h1>
         
    </div>
                
    <form method="post" onsubmit='handleSubmit(event)'>
                
        <div class="container" id="Pesquisar">
            
            <button type="submit" onclick='Search()'><i class="fa-solid fa-magnifying-glass"></i></button>
                    
            <input type="text" autocomplete="off" list="Sugestoes"size="50%" placeholder="Título do Livro ou Nome do(a) Autor(a)">
            
        </div>
            
    </form> 
            
    <div class="dropdown">
        <div  onclick="Cabecalho.Goback()" class="container">
            <img class="dropelon usuarioFoto"src="${usersData[1].userPhoto}"> 
            <p class="usuarioNome">${usersData[1].username}</p>
        </div>
        <div class="dropdown-content">
            <a href="https://www.figma.com/file/3rWtag6oLh0amk2wS0XQH1/monitor-app?node-id=5%3A3342">Figna</a>
            <a href="dicas.html">Dicas</a>
            <a href="#">Ajuda</a>
            <a href="#"> Sobre nós</a>
        </div>               
    </div>     
</div>`
    )
    const header = document.querySelector('header')
    header.insertAdjacentHTML('afterbegin', Cabecalho);
}

export function GoBack(){
    window.history.back()
}