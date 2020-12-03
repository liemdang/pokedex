import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PokemonCard from './PokemonCard';
import '../../App.css';

const PokemonList = () =>  {
    const [initialLoading, setInitialLoading] = useState(12);
    const [pokemons, setPokemons] = useState([]);

    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/?limit=${initialLoading}`;
    useEffect(() => {
         axios.get(pokemonURL)
        .then(res => setPokemons(res.data["results"]))
    }, [pokemonURL])

    const handleLoadMore = () => {
        setInitialLoading(initialLoading + 12)
    }
    return (
        <div className="row dashboard">
            {pokemons.map(pokemon => (
                <PokemonCard 
                    key={pokemon.name}
                    name={pokemon.name}
                    url={pokemon.url}
                    number={pokemon.url.split("https://pokeapi.co/api/v2/pokemon/")[1].replace(/\//g, "")}
                />
            ))}
            <button onClick={handleLoadMore}>Load more</button>
        </div>
    )
 
}

export default PokemonList
