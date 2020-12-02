import React, { Component } from 'react'
import axios from 'axios';
import PokemonCard from './PokemonCard';
import '../../App.css';

export default class PokemonList extends Component {
    state = {
        pokemonURL : "https://pokeapi.co/api/v2/pokemon/?limit=150",
        pokemon: [],
        pokemonName: [],
        number: "",
        
    }
    async componentDidMount() {
        const res = await axios.get(this.state.pokemonURL);
        this.setState({pokemon: res.data['results']})
    }
    
    render() {
        return (
            <div className="row dashboard">
                {console.log(this.state.pokemon)}
                {this.state.pokemon.map(pokemon => (
                    <PokemonCard 
                        key={pokemon.name}
                        name={pokemon.name}
                        url={pokemon.url}
                        number={pokemon.url.split("https://pokeapi.co/api/v2/pokemon/")[1].replace(/\//g, "")}
                    />
                ))}
            </div>
        )
    }
}
