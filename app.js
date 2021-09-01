import { getRandomPokemon, renderPokemon } from "./utils.js";
import { encounteredPokemon, catchPokemon, setPokedex, getPokedex } from "./poke-times.js";
import { findById } from "./poke-times.js";
// import functions and grab DOM elements



const userButton = document.getElementById('button');


// initialize global state
let turns = 0;


renderPokemon();

userButton.addEventListener('click', () => {
    let trainer = document.querySelector('input:checked');
    turns++;
    catchPokemon(trainer.value);
    renderPokemon();
   
    if (turns === 10) {
        window.location = './Results/results.html';
    }
    
});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
