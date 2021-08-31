import { findById } from "./id.js";

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
    const lastSeen = findById()
    let seen = 0;

}

export function catchPokemon() {
    let pokeCaught = 0;
}

export function setPokedex(pokedex) {
    const stringObject = JSON.stringify(pokedex);
    localStorage.setItem(stringObject, pokedex);
}