

const pokemonName = document.getElementById('pokemonList');
const pokemonUrl = document.getElementById();

/*

const new = document.getElementById();
const new = document.getElementById();
const new = document.getElementById();
const new = document.getElementById();


*/


fetch('https://pokeapi.co/api/v2/pokemon')
.then( response => response.json())
.then ( pokeData => {

    console.log(pokeData)



    for (pokemon of pokeData) {
        const pokeList = document.createElement ('div');
         console.log()


    } // end of foor loop function


}) // end of .then function


