const POKEDEX = 'pokedex';
export function encounteredPokemon(id) {
    const encounterArray = getPokedex();
    const lastSeen = findById(encounterArray, id);
    if (lastSeen) {
        lastSeen.seen++;
    } else {
        const pokemonObject = { id: id, seen: 1, caught: 0 };
        encounterArray.push(pokemonObject);
    }
    setPokedex(encounterArray);
    
    
}

export function catchPokemon(id) {
    const catchArray = getPokedex();
    console.log(catchArray);
    const lastCaught = findById(catchArray, id);
    console.log(lastCaught, id);
    lastCaught.caught++;
    
    setPokedex(catchArray);
}


export function setPokedex(pokedex) {
    const stringArray = JSON.stringify(pokedex);
    localStorage.setItem(POKEDEX, stringArray);
}
export function getPokedex() {
    const dataDex = localStorage.getItem(POKEDEX);
    if (!dataDex) {
        return [];
    }
    const parseDex = JSON.parse(dataDex);
    return parseDex;
}

export function findById(data, id) {

    for (let poke of data) {
        if (poke.id === Number(id)) {
            return poke;
        }
    }
}