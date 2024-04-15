import React from 'react';
import './App.css';
import QuoteContainer from './quoteContainer';

function App() {
  return (
    <div className="App">
      <h1 className="title">Los Simpson</h1>
      {}
      <input type="text" id="character-filter" placeholder="Filtrar por nombre del personaje" />
      {}
      <QuoteContainer />
      {}
      <button id="more">Mostrar más personajes</button>
    </div>
  );
}

export default App;
