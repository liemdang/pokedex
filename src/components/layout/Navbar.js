import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-extend-md navbar-dark bg-dark fixed-top">
                        <Link to="/" className="navbar-brand">Pokedex</Link>
                    </nav>
                </div>    
            </Router>
        )
    }
}
