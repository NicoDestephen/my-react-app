import React from 'react';

function NavBar({ pokemonList, onPokemonButtonClick }) {
    return (
        <div>
            {pokemonList.map((pokemon, index) => (
                <button key={index} onClick={() => onPokemonButtonClick(index)}>
                    {pokemon.name}
                </button>
            ))}
        </div>
    );
}

export default NavBar;