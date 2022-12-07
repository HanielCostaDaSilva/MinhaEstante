export default function SelectPage(number=1) {
    return (
        <section>
            <div>
                <span class="pag"><span class="numero-pag">{number}</span><span id="ordem-pag">ª</span> Página</span></div>
            
            <form method="post" class="pesquisar-pag">

                <input class="leitor-pag" type="number" size="50%" placeholder="1234" />
                <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
    
            </form>
            
            <div class="botao-container">
                <button><i class="fa fa-arrow-left"></i> Anterior</button>
                <button>Próxima <i class="fa fa-arrow-right"> </i></button>
            </div>
        </section>
    )

}