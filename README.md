## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.



## HTML/Catcher page
User should be able to select one of 3 pokemon and click the catch button. After 10 pokemon are caught, redirect to results page

    1) header
    2) 3-9 images(divs for these)
    3) button to catch
    4) Radio buttons to select

## State
How many times has the user caught a pokemon.
-let pokeCaught = 0; and just incriment it with each catch

## Local Storage
-Pokemon seen
-Pokemon Caught

## Event
user loads the page
-call renderPokemon

User clicks catch button.
-increments: `pokeCaught++`
    -now, if pokeCaught > 10, redirect to the results page
-we figure out the id of the pokemon caught
    -call catchPokemon()
-access our local storage to get the current caught/viewd pokemon
    -call renderPokemon
-show the user the three new pokemon

## Functions
renderPokemon
-call getRandomPokemon
    -whenever we find 3 new pokemon, we need to track that they have no been "seen"
    -call encounteredPokemon on all 3 new pokemon

getRandomPokemon()
-does the hard work to find three unique and random pokemon from our raw data


setPokedex()
    -takes in a pokedex, stringifys, puts in loca storag
getPokedex()
    -retrieves and parses the pokedex in local storage
encounteredPokemon(id)
    -if the pokemon has been seen before, increment the times seen.
    -if first time, make a new object with `{id: '5', encountered: 1, caught: 0}`
catchPokemon(id)
-increment the `caught` of this pokemon in local storage


## Results page
user should be able to see the pokemon they caught, how many times caught, and how many encounters with them.

-grab your data from local storage
-render a table of values showing "caught" and "encountered" for each pokemon in your pokedex.
