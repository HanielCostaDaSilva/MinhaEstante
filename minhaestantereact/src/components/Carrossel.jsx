// 26/11/2022
// Aqui é onde vamos fazer os componentes do site
import {useEffect, useState} from 'react';
import '../App.css';

function Carrosel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/static/livros.json').then((response) => response.json()).then(setData);
  }, [])

  if (!data || !data.length) return null;

  return (
      <div className="container">
        <div className="carousel">

          {data.map((item) => {
            const {id, image, name, author} = item
            return (
              <div className="item" key={id}>
                <div className="image">
                    <img src={image} alt={name}/>
                </div>
                <div className="info">
                    <span className={name}>Os Americanos Estão Chegando</span>
                    <span className={author}>Daphne Du Maurier</span>
                    <span className="favorite">Favoritar &hearts;</span>
                </div>i
              </div>
            )
            })}
        </div>
      </div>
  )
}

export default Carrosel;