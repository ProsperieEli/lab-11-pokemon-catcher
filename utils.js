import data from "./data.js";

export function getRandomPokemon(){
    console.log('hi, hi'); 
    const threePokemon = [];

    let randomIndex1 = Math.floor(Math.random() * threePokemon.length);
    let randomIndex2 = Math.floor(Math.random() * threePokemon.length);
    let randomIndex3 = Math.floor(Math.random() * threePokemon.length);

    while (
        randomIndex1 === randomIndex2
        || randomIndex2 === randomIndex3
        || randomIndex1 === randomIndex3){
        randomIndex1 = Math.floor(Math.random() * threePokemon.length);
        randomIndex2 = Math.floor(Math.random() * threePokemon.length);
        randomIndex3 = Math.floor(Math.random() * threePokemon.length);
    }
    return [
        data[randomIndex1],
        data[randomIndex2],
        data[randomIndex3]
    ];
}

export function renderPokemon() {
    
}
