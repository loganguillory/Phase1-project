

const pokeDisplay = document.getElementById('pokemon-info');
const pokemonDetails = document.getElementById('pokemon-details');
const pokeImg = document.getElementById('pokemon-image');
const pokemonName = document.getElementById('pokemonName');
const pokeicon = document.getElementById('pokemon-icon');
const pokeId = document.getElementById('pokemon-id');
const pokeSpecies  = document.getElementById('pokemon-species');
const pokeType = document.getElementById('pokemon-type');

/*


*/

for ( let i = 1; i <= 150; i++) {
    
    let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;

    
fetch(pokeUrl)
.then(response => response.json())
.then(pokeData => {

    pokemonLista(pokeData)

    

    })
  function pokemonLista (pokemonData) { 

    console.log(pokemonData)
    
    
    const pokeList = document.createElement('li');
    pokeList.textContent = pokemonData.name;
    pokeDisplay.append(pokeList)

    


    pokeList.addEventListener('click', (e) => {
        
        pokemonShowcase(pokemonData)});
        


        


}


function pokemonShowcase(poke) {

    //console.log(poke.sprites.back_default)
    //console.log(poke.types[0].type.name)

    pokemonName.textContent = `Name: ${poke.name}`;
    pokeId.textContent = `ID: ${poke.id}`;
    pokeicon.src = poke.sprites.front_default
    pokeSpecies.textContent = `Specie: ${poke.species.name}`;
    pokeType.textContent = `Type ${poke.types[0].type.name}`;
}


}
//pokemonShowcase(pokemonData[1])