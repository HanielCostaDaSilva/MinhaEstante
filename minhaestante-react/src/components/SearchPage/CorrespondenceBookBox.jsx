/** Este componente cria as caixas da página de pesquisa,
 * ImgCorrespondence Equivale ao link do elemento
 * 
 * **/

export default function CorrespondenceBox(ImgCorrespondence, title, authors, genres, pages) {
    return (
        <div className="caixa-pesquisa mx-auto mb-lg-2">
            <div className="capa-box">

                <img className="capa-livro"
                    src={ImgCorrespondence} />

            </div>

            <div className="d-grid g-3 mb-3">

                <h3 className="p-3 d-grid g-5 titulo-livro"> ${title} </h3>
                <div className='d-flex flex-column mb-3 ms-3 mt-2 informacoes-basicas-livro'>

                    <div className='authors'>
                        ${authors.map((author) => getAuthors(author))}
                    </div>

                    <p className="genero-livro"> {genres.join(', ')}</p>
                    <p className="paginas-livro"><span className="quantidade-pagina">{pages}</span> páginas </p>
                </div>
            </div>

            <div className="botoes-livro d-grid gap-3 mt-3 p-3 h-50">
                <button className="btn btn-secondary" type="button">
                    <i className="fa-sharp fa-solid fa-heart"></i> Favoritar
                </button>

                <button className="btn btn-secondary dropdown-toggle dropdown" type="button" id="Opcoes"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Opções
                </button>

                <div className="dropdown-menu" aria-labelledby="Opcoes">
                    <button className="dropdown-item" onclick="adicionarEstante()"> <i className="fa-sharp fa-solid fa-books"></i>
                        minha estante</button>
                    <button className="dropdown-item" onclick="adicionarListaDesejado()"> <i className="fa-regular fa-eyes"></i>
                        desejo </button>
                    <button className="dropdown-item" onclick="BuscarAmazon()"> <i className="fa-brands fa-amazon"></i>
                        Amazon</button>
                </div>

            </div>
        </div>
    )
}

function getAuthors(Author) {
    let AuthorName = Author.replace('_', ' ')
    return (<p>{AuthorName}. </p>)
}