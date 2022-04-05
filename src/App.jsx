import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export function App() {
  //GETS data from API
  
  useEffect(()=> {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(response => response.json())
    .then(json => console.log(json))
  },[]);

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>PokeDex</h1>
          {response.json.map( pokemon =>{
            return (
              <div>{pokemon.name}</div>
            )
          })}
      </header>
    </div>
  );
}

export default App;
