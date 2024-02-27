import PropTypes from "prop-types";

PokemonCard.porpsTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    })
}
function PokemonCard(props) {
    const { pokemon } = props;
    return (
        <figure className="card">
            {pokemon.imgSrc ? (
                <img
                    src={pokemon.imgSrc}
                    alt={pokemon.name}
                    className="card-img"
                />
            ) : (
                <p>???</p>
            )}
            
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}
  
export default PokemonCard;