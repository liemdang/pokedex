import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';
import { BrowserRouter as Router,  Route, Switch} from 'react-router-dom';
import Pokemon from './components/pokemon/Pokemon';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/pokemon/:name" exact component={Pokemon}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
