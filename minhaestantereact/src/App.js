// 26/11/2022
// Aqui é onde vamos fazer os componentes do site
import {useEffect} from 'react';
import './App.css';

export default function Cabecalho() {

  useEffect(() => {


  }, [])

  return (
      <div className="container">
        <div className="carousel">
          <div class="item">
            <div className="image">
              <img src="..\static\images\livros\capa-Os-americanos-Estao-Chegando150w224h.png" alt="livro"/>
            </div>
            <div className="info">
              <span className="name">Os Americanos Estão Chegando</span>
              <span className="author">Daphne Du Maurier</span>
              <span className="favorite">Favoritar &hearts;</span>
            </div>
          </div>
        </div>
      </div>
  )
}

