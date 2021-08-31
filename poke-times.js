export function getPokedex() {
    const dataDex = localStorage.getItem('pokedex');
    if (!dataDex) {
        return [];
    }
    const parseDex = JSON.parse(dataDex);
    return parseDex;
}

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
    const lastCaught = findById(catchArray, id);
    lastCaught.caught++;

    setPokedex(catchArray);
}
    

export function setPokedex(pokedex) {
    const stringObject = JSON.stringify(pokedex);
    localStorage.setItem(stringObject, pokedex);
}
export function findById(data, id) {

    for (let poke of data) {
        if (poke.id === id) {
            return poke;
        }
    }
}