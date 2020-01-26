import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/layout/Dashboard';
import { BrowserRouter as Router,  Route, Switch, Link} from 'react-router-dom';
import Pokemon from './components/pokemon/Pokemon';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navbar navbar-extend-md navbar-dark fixed-top" style={{backgroundColor: "#e3350d"}} >
              <Link to="/" className="navbar-brand">Pokedex</Link>
          </nav>
        </div>   
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/pokemon/:name" exact component={Pokemon}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
