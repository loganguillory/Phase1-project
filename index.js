

const pokeDisplay = document.getElementById('pokemon-info');
const pokemonDetails = document.getElementById('pokemon-details');
const pokeImg = document.getElementById('pokemon-image');
const pokemonName = document.getElementById('pokemonName');
const pokeicon = document.getElementById('pokemon-icon');
const pokeId = document.getElementById('pokemon-id');
const pokeSpecies = document.getElementById('pokemon-species');
const pokeType = document.getElementById('pokemon-type');
const pokeLookUp = document.getElementById('pokemonSearch2');

/*


*/


for (let i = 1; i <= 150; i++) {

    let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;


    fetch(pokeUrl)
        .then(response => response.json())
        .then(pokeData => {

            pokemonLista(pokeData)



        })



    function pokemonLista(pokemonData) {




        const pokeList = document.createElement('li');
        pokeList.textContent = pokemonData.name;
        pokeDisplay.append(pokeList)




        pokeList.addEventListener('click', (e) => {

            pokemonShowcase(pokemonData)
        });



        pokeLookUp.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log(pokeLookUp.textContent)
        })


        // show pokemon when load the page
        pokemonShowcase(pokemonData)




    }


    function pokemonShowcase(poke) {

        //console.log(poke.sprites.back_default)
        //console.log(poke.types[0].type.name)

        pokemonName.textContent = ` ${poke.name}`;
        pokeId.textContent = `ID: ${poke.id}`;
        pokeicon.src = poke.sprites.front_default;
        pokeSpecies.textContent = `Species: ${poke.species.name}`;
        pokeType.textContent = `${poke.types[0].type.name}`;
        dinamicBackground(pokeType.textContent)

    }


    // background change
    function dinamicBackground(typeColor) {

        if (typeColor === 'water') {
            document.getElementById("pokemon-details").style.backgroundColor = "#0A7ABC";
        }
        else if (typeColor === 'grass') {
            document.getElementById("pokemon-details").style.backgroundColor = "#3E9709";
        }
        else if (typeColor === 'fire') {
            document.getElementById("pokemon-details").style.backgroundColor = '#F67F0B';
        }
        else if (typeColor === 'bug') {
            document.getElementById("pokemon-details").style.backgroundColor = '#91BA2E';
        }
        else if (typeColor === 'normal') {
            document.getElementById("pokemon-details").style.backgroundColor = '#ACA974';
        }
        else if (typeColor === 'poison') {
            document.getElementById("pokemon-details").style.backgroundColor = '#611380';
        }
        else if (typeColor === 'rock') {
            document.getElementById("pokemon-details").style.backgroundColor = '#C1C1C1';
        }
        else if (typeColor === 'electric') {
            document.getElementById("pokemon-details").style.backgroundColor = '#FFFA24';
        }
        else if (typeColor === 'ground') {
            document.getElementById("pokemon-details").style.backgroundColor = '#EDE193';
        }
        else if (typeColor === 'psychic') {
            document.getElementById("pokemon-details").style.backgroundColor = '#EDE193';
        }
        else if (typeColor === 'fairy') {
            document.getElementById("pokemon-details").style.backgroundColor = '#EFE18A';
        }
        else if (typeColor === 'fighting') {
            document.getElementById("pokemon-details").style.backgroundColor = '#800B11';
        }
        else if (typeColor === 'dragon') {
            document.getElementById("pokemon-details").style.backgroundColor = '#8A55FD';
        }
        else if (typeColor === 'ice') {
            document.getElementById("pokemon-details").style.backgroundColor = '#1995A1';
        }
    }


}
//pokemonShowcase(pokemonData[1])