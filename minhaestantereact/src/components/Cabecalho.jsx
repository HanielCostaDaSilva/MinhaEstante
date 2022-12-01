// Imports úteis para o cabeçalho

import '../App.css';

function Cabecalho(){
    <div className="container" id='Cabecalho'>
    <div className="container">
        <h1 id="Inicial"><i className="fa-solid fa-book-open-reader"></i> Minha Estante</h1>
    </div>
                
    <form method="post" onsubmit='handleSubmit(event)'>
                
        <div className="container" id="Pesquisar">
            
            <button type="submit" onclick='Search()' id='Enviar'><i className="fa-solid fa-magnifying-glass"></i></button>
                    
            <input id='BuscaInput' type="text" value='' autocomplete="off" size="50%" placeholder="Título do Livro ou Nome do(a) Autor(a)" />
            
        </div>
 
    </form> 
    
    <div className="dropdown">
        <div className="container">
            <img className="dropelon usuarioFoto"src="" /> 
            {/* <p className="usuarioNome">${usersData[1].username}</p> */}
        </div>
        <div className="dropdown-content">

            <a href="perfilPage.html"> Perfil </a>
            <a href="SearchPage.html">Pesquisar Livros</a>
            <a href="dicas.html">Dicas</a>
            <a href="#">Ajuda</a>
            <a href="#"> Sobre nós</a>
            
        </div>               
    </div>     
</div>
}

export default Cabecalho;