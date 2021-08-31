import { getRandomPokemon } from "../utils.js";

const test = Qunit.test;

test('should return three pokemon that are unique', (expect) => {


    
  
    const actual = getRandomPokemon();

    expect.eqal(actual.length, 3);
    //check that all three have a truthy value for pokemon
    expect.equal(!!actual[0].pokemon, true);
    expect.equal(!!actual[1].pokemon, true);
    expect.equal(!!actual[2].pokemon, true);
});
