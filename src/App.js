import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import PokemonList from './components/pokemon/PokemonList';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Dashboard/>
      {/* <Navbar/>
      <PokemonList /> */}
    </div>
  );
}

export default App;
