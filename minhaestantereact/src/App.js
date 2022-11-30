// 26/11/2022
// Aqui é onde vamos fazer os componentes do site
import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:30000/static/livros.json')
    .then((response) => response.json())
    .then(setData);
  }, [])

  if (!data || !data.length) return null;

  return (
      <div className="container">
        <div className="carousel">
          <div className="item">
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

export default App;