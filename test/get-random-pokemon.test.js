import { getRandomPokemon} from "../utils.js";
import { encounteredPokemon } from "../poke-times.js";
import { catchPokemon, setPokedex, getPokedex, findById } from "../poke-times.js";

const test = QUnit.test;

test('should return three pokemon that are unique', (expect) => {


    
  
    const actual = getRandomPokemon();

    expect.equal(actual.length, 3);
    //check that all three have a truthy value for pokemon
    expect.equal(!!actual[0].pokemon, true);
    expect.equal(!!actual[1].pokemon, true);
    expect.equal(!!actual[2].pokemon, true);
});


test('Test encounteredPokemon and how much they/ve been seen', (expect) => {
    const poke = [
        { seen: 0, caught: 1, id: 9 },
        { seen: 1, caught: 2, id: 2 },
        { seen: 9, caught: 7, id: 101 }
    ];
    setPokedex(poke);

    encounteredPokemon(9);
    const mutatedPoke = getPokedex();
    const actual = mutatedPoke[0].seen === 1;
    expect.equal(actual, true);


});

test('Test catch pokemon', (expect) => {
    const poke = [
        { seen: 0, caught: 1, id: 9 },
        { seen: 1, caught: 2, id: 2 },
        { seen: 9, caught: 7, id: 101 }
    ];
    setPokedex(poke);

    catchPokemon(9);
    const mutatedPoke = getPokedex();
    const actual = mutatedPoke[0].seen === 1;
    expect.equal(actual, true);
});