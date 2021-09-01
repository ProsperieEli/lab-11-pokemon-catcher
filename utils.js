import data from "./data.js";
import { findById } from "./poke-times.js";
import { encounteredPokemon } from "./poke-times.js";

export function getRandomPokemon(){
    
  

    let randomIndex1 = Math.floor(Math.random() * data.length);
    let randomIndex2 = Math.floor(Math.random() * data.length);
    let randomIndex3 = Math.floor(Math.random() * data.length);

    while (
        randomIndex1 === randomIndex2
        || randomIndex2 === randomIndex3
        || randomIndex1 === randomIndex3){
        randomIndex1 = Math.floor(Math.random() * data.length);
        randomIndex2 = Math.floor(Math.random() * data.length);
        randomIndex3 = Math.floor(Math.random() * data.length);
    }
    return [
        data[randomIndex1],
        data[randomIndex2],
        data[randomIndex3]
    ];
}

export function renderPokemon() {

   
    const firstChoice = document.getElementById('choice1');
    const secondChoice = document.getElementById('choice2');
    const thirdChoice = document.getElementById('choice3');
    const userImg = document.getElementById('img1');
    const userImg2 = document.getElementById('img2');
    const userImg3 = document.getElementById('img3');
   
    const pokeRandom = getRandomPokemon();

    userImg.src = pokeRandom[0].url_image;
    firstChoice.value = pokeRandom[0].id;

    encounteredPokemon(pokeRandom[0].id);

    secondChoice.value = pokeRandom[1].id;
    userImg2.src = pokeRandom[1].url_image;

    encounteredPokemon(pokeRandom[1].id);

    thirdChoice.value = pokeRandom[2].id;
    userImg3.src = pokeRandom[2].url_image;

    encounteredPokemon(pokeRandom[2].id);

    
}
