import { useEffect, useState } from 'react';

import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar';

import './App.css'

function App() {
    const pokemonList = [
        {
            name: "bulbasaur",
            imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            favWeather: "cloudy"
        },
        {
            name: "charmander",
            imgSrc:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        favWeather: "sunny"
        },
        {
            name: "squirtle",
            imgSrc:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
            favWeather: "rainy"
        },
        {
            name: "pikachu",
            imgSrc:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        favWeather: "sunny"
        },
        {
            name: "mew",
            favWeather: "stormy"
        },
    ];

    const [pokemonIndex, setPokemonIndex] = useState(0);

    useEffect(
        () => {
            alert('hello pokemon trainer :)')
        }, []
    );

  return (
        <div>
            <PokemonCard pokemon={pokemonList[pokemonIndex]} />
            <NavBar setPokemonIndex={setPokemonIndex} pokemonList={pokemonList}/>
        </div>
  );
}

export default App