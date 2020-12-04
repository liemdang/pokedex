import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashBoard from './components/layout/Dashboard';
import { BrowserRouter as Router,  Route, Switch, Link} from 'react-router-dom';
import PokemonDetails from './components/pokemon/PokemonDetails';
function App() {
  return (
    <div className="App">
      <div className="content_container">
        <Router>
          <div>
            <nav className="navbar navbar-dark fixed-top" style={{backgroundColor: "#e3350d"}} >
                <Link to="/" className="navbar-brand">
                  <span className="iconify" data-icon="mdi-pokeball" data-inline="false"></span>
                  <span className="navbar_pokedex">Pokedex</span>
                </Link>
            </nav>
          </div>   
          <Switch>
            <Route path="/" exact component={DashBoard}/>
            <Route path="/pokemon/:name" exact component={PokemonDetails}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
