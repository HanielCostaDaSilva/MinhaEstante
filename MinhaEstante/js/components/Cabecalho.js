import{usersData} from '../../user.js'

export function loadHeader(){
    const Cabecalho=(
`<div class="container" id='Cabecalho'>
    <div class="container">
        <h1 class="Inicial"> <a href='#'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M352 96c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zM240 248V512l-48.4-24.2c-20.9-10.4-43.5-17-66.8-19.3l-96-9.6C12.5 457.2 0 443.5 0 427V224c0-17.7 14.3-32 32-32H62.3c63.6 0 125.6 19.6 177.7 56zm32 264V248c52.1-36.4 114.1-56 177.7-56H480c17.7 0 32 14.3 32 32V427c0 16.4-12.5 30.2-28.8 31.8l-96 9.6c-23.2 2.3-45.9 8.9-66.8 19.3L272 512z"/></svg> Minha Estante </a> </h1>
         
    </div>
                
    <form method="post" onsubmit='handleSubmit(event)'>
                
        <div class="container" id="Pesquisar">
            
            <button type="submit" onclick='Search()'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg></button>
                    
            <input type="text" autocomplete="off" list="Sugestoes"size="50%" placeholder="Título do Livro ou Nome do(a) Autor(a)">
            
        </div>
            
    </form> 
            
    <div class="dropdown">
        <div class="container">
            <button class="dropelon"> 
            <img class="usuarioFoto"src="${usersData[0].userPhoto}> </button>
            <p class="usuarioNome">${usersData[0].username}</p>
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
    header= document.querySelector('header')
      header.insertAdjacentHTML('afterbegin',Cabecalho);
}
