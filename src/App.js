import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import PokemonList from './components/pokemon/PokemonList';
import PokemonCard from './components/pokemon/PokemonCard';
import './App.css';

export function App() {
  // //GETS data from API
  
  // useEffect(()=> {
  //   fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  // },[]);

  
    return (
      <div className="App">
        <NavBar />
        <div className='container'>
          <Dashboard />
        </div>
      </div>
    );
  

}

export default App;
