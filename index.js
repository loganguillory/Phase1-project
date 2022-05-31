

const pokeDisplay = document.getElementById('pokemon-info');
const pokemonDetails = document.getElementById('pokemon-details');
const pokeImg = document.getElementById('pokemon-image');
const pokemonName = document.getElementById('pokemonName');
/*




const new = document.getElementById();
const new = document.getElementById();

*/


fetch('https://pokeapi.co/api/v2/pokemon')
.then( response => response.json())
.then ( pokeData => {

    console.log(pokeData.results)

    for ( const pokemon of pokeData.results ) {

        //console.log(pokemon.name)

        const pokeList = document.createElement('h4');
        pokeList.textContent = pokemon.name;
        pokeDisplay.append(pokeList)


        pokeList.addEventListener('click', (e) => {
            pokemonShowcase(pokemon)

            let pokeLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.name}.png`;
            console.log(pokeLink)
            //fetch('pokeLink')
            //.then (response => response.json())
            //.then ( newRequest => { 
            //    console.log(newRequest)


        //    })

        }); // ends event listener 1


    }; // ends for loop


    function pokemonShowcase (poke) {


        //console.log(poke)
        pokemonName.textContent = poke.name;
        pokemonDescription.textContent = poke.url;
        //pokemonImg.src = 
        



    }; // ends pokemonShowcase function 




}); // ends .then function




/*
test area



*/
