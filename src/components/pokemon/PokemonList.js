import React, { Component } from 'react'
import axios from 'axios';
import PokemonCard from './PokemonCard';
import '../../App.css';

export default class PokemonList extends Component {
    state = {
        pokemonURL : "https://pokeapi.co/api/v2/pokemon/?limit=150",
        pokemon: [],
        name: ""
    }
    async componentDidMount() {
        const res = await axios.get(this.state.pokemonURL);
        this.setState({pokemon: res.data['results']})
        console.log(this.state.pokemon)
        // this.state.pokemonURL.map(res => console.log(res))
    }
    render() {
        return (
            <div className="row dashboard">
                {this.state.pokemon.map(pokemon => (
                    <PokemonCard 
                        key={pokemon.name} 
                        name={pokemon.name} 
                        url={pokemon.url}
                        number={pokemon.url.split("https://pokeapi.co/api/v2/pokemon/")}
                        />
                ))}
              
            </div>
        )
    }
}
