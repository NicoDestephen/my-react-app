import PropTypes from 'prop-types';

function NavBar({setPokemonIndex, pokemonList}) {
    const selectPokemon = (index) => {
        setPokemonIndex(index);
        if (pokemonList[index].name === "pikachu") {
            alert("pika pikachu !!!");
        }
    };

    return (
        <nav>
            {pokemonList.map((pokemon, index) => (
                <button key={pokemon.name} onClick={() => selectPokemon(index)}>{pokemon.name}</button>
            ))}
        </nav>
    )
}

NavBar.propTypes = {
    setPokemonIndex: PropTypes.func.isRequired,
    pokemonList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            imgSrc: PropTypes.string,
            favWeather: PropTypes.string,
        }).isRequired,
    )
};

export default NavBar;