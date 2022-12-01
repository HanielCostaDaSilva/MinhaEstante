import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Carrossel from './components/Carrossel.jsx';
import Cabecalho from './components/Cabecalho.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cabecalho />
    <Carrossel />
  </React.StrictMode>
);

