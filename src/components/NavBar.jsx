import React from 'react';
import PreviousButton from './PreviousButton';
import NextButton from './NextButton';

function NavBar({ onPreviousClick, onNextClick, pokemonIndex, pokemonList }) {
    return (
        <div>
            {pokemonIndex > 0 && <PreviousButton onClick={onPreviousClick} />}
            {pokemonIndex < pokemonList.length - 1 && <NextButton onClick={onNextClick} />}
        </div>
    );
}

export default NavBar;