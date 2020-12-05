import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PokemonCard from './PokemonCard';
import '../../App.css';

const PokemonList = () =>  {
    const [initialLoading, setInitialLoading] = useState(16);
    const [pokemons, setPokemons] = useState([]);
    const [clickedLoadMore, setClickedLoadMore] = useState(false)

    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/?limit=${initialLoading}`;
    useEffect(() => {
         axios.get(pokemonURL)
        .then(res => setPokemons(res.data["results"]))
        .then(document.getElementsByClassName("content_container")[0].style.height = "100%")
    }, [pokemonURL])

    const handleLoadMore = () => {
        setInitialLoading(initialLoading + 12);
        document.getElementById("btn_load").remove();
        setClickedLoadMore(true)
    }
    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && clickedLoadMore ) {
            setInitialLoading(initialLoading + 12)
        }
    };
    return (
        <div>
            <div className="row dashboard">
            {pokemons.map(pokemon => (
                <PokemonCard 
                    key={pokemon.name}
                    name={pokemon.name}
                    url={pokemon.url}
                    number={pokemon.url.split("https://pokeapi.co/api/v2/pokemon/")[1].replace(/\//g, "")}
                />
            ))}
            <br />
            </div>
            <button id="btn_load" className="btn btn-primary btn_loadMore" onClick={handleLoadMore}>Mehr Pokemon laden</button>
        </div>
        
    )
 
}

export default PokemonList
