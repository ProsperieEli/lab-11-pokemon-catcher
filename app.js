import { getRandomPokemon, renderPokemon } from "./utils.js";
import { encounteredPokemon, catchPokemon, setPokedex, getPokedex } from "./poke-times.js";
import { findById } from "./poke-times.js";
// import functions and grab DOM elements



const userButton = document.getElementById('button');


// initialize global state



renderPokemon();

userButton.addEventListener('click', () => {
    let trainer = document.querySelector('input:checked');
});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
