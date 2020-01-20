import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-extend-md navbar-dark bg-dark fixed-top">
                    <a href className="navbar-brand">Pokedex</a>
                </nav>
            </div>    
        )
    }
}
