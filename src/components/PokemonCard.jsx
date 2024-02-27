function PokemonCard() {
    return (
        <figure className="card">
            <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                alt="bulbasaur"
                className="card-img"
            />
            <figcaption>Bulbasaur</figcaption>
        </figure>
    );
  }
  
  export default PokemonCard;