

const pokeDisplay = document.getElementById('pokemon-info');
const pokemonDetails = document.getElementById('pokemon-details');
const pokeImg = document.getElementById('pokemon-image');
const pokemonName = document.getElementById('pokemonName');
const pokeicon = document.getElementById('pokemon-icon');
const h1 = document.createElement('h1')

//const pokeDescription = document.getElementById('pokemonDescription')
//et pokeLink =

/*

const new = document.getElementById();
const new = document.getElementById();

*/


fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(pokeData => {

        console.log(pokeData.results)

        for (const pokemon of pokeData.results) {

            //console.log(pokemon.name)

            const pokeList = document.createElement('li');
            pokeList.textContent = pokemon.name;
            pokeDisplay.append(pokeList)


            pokeList.addEventListener('click', (e) => {
                //pokemonShowcase(pokemon)

                let pokeLink = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;
                console.log(pokeLink)
                fetch(pokeLink)
                    .then(response => response.json())
                    .then(newRequest => {
                        console.log(newRequest)
                        pokemonShowcase(newRequest)


                // let descriptionLink = `https://pokeapi.co/api/v2/characteristic/${pokemon.description}`
                // console.log(descriptionLink)
                // fetch(descriptionLink)
                //         .then(response => response.json())
                //         .then(description => {
                //             console.log(description)
                //             pokemonShowcase(description)
                //         })







                    });

            }); // ends event listener 1


        }; // ends for loop


        function pokemonShowcase(poke) {

            console.log(poke.sprites.back_default)
            pokemonName.textContent = poke.name;
            pokeicon.src = poke.sprites.front_default
            //pokeDescription = poke.description
            //pokemonImg.src = 

        }; // ends pokemonShowcase function 




    }); // ends .then function


