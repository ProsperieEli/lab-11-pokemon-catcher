import { getRandomPokemon } from "./utils.js";
import { encounteredPokemon, catchPokemon, setPokedex } from "./poke-times.js";
//import { findById } from "./id.js";
// import functions and grab DOM elements


const userChoice = document.getElementById('choice1');
const userChoice2 = document.getElementById('choice2');
const userChoice3 = document.getElementById('choice3');
const userButton = document.getElementById('button');
// initialize global state

const pokemonArray = getRandomPokemon(); 

//console.log(pokemonArray);


userButton.addEventListener('click', () => {

});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
