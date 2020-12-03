import React from 'react';
import PokemonList from '../pokemon/PokemonList';

const DashBoard = () => {
    return (
        <div className="row">
            <div className="col">
                <PokemonList/>
            </div>
        </div>
    )
}

export default DashBoard;
