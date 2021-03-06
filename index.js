const bodyy = document.getElementsByTagName('body');

function myTimeoutFunction() {
    websiteLoad()
    document.body.style.backgroundImage = "url('https://cdn.vox-cdn.com/thumbor/WLoR5Ky1NcQPkDEETYMt1bteS48=/0x0:1920x1080/920x613/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69623074/Pokemon_UNITE___Team_Up._Take_Down.___Hero_Image___1080p.0.png')";
}

let allPokemon

var myTimeout = setTimeout(myTimeoutFunction, 3000);

function websiteLoad() {
    function randonPokemon() {
        let randon = parseInt(Math.floor(Math.random() * (150 - 1) + 1));
        pokemonShowcase(allPokemon[randon])
    }

    const pokeDisplay = document.getElementById('pokemon-info');
    const pokemonDetails = document.getElementById('pokemon-details');
    const pokeImg = document.getElementById('pokemon-image');
    const pokemonName = document.getElementById('pokemonName');
    const pokeicon = document.getElementById('pokemon-icon');
    const pokeId = document.getElementById('pokemon-id');
    const pokeSpecies = document.getElementById('pokemon-species');
    const pokeType = document.getElementById('pokemon-type');
    const pokeLookUp = document.getElementById('pokeSearch');
    const goBtn = document.getElementById('go');
    const form = document.getElementById('form');


    let pokeTest = []
    function test() {

        for (let i = 1; i < 150; i++) {
            let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
            pokeTest.push(fetch(pokeUrl)
                .then(response => response.json()))
        }
    }

    test()
    Promise.all(pokeTest).then((pokemons) => {

        const pokemonsOrdem = pokemons.sort((prevPokemon, nextPokemon) => prevPokemon.name.localeCompare(nextPokemon.name))
        pokemonsOrdem.forEach((pokemon) => {
            pokemonLista(pokemon)
            allPokemon = pokemons
        })
        pokemonShowcase(pokemons[68]);
    })

    function pokemonLista(pokemonData) {

        const pokeList = document.createElement('li');
        pokeList.textContent = pokemonData.name.toUpperCase([0]);
        pokeDisplay.append(pokeList)
        pokeList.addEventListener('click', (e) => {
            pokemonShowcase(pokemonData)
        });

    }

    function pokemonShowcase(poke) {
        pokemonName.textContent = ` ${poke.name}`;
        pokeId.textContent = `ID: ${poke.id}`;
        pokeicon.src = poke.sprites.front_default;
        pokeSpecies.textContent = `Species: ${poke.species.name}`;
        pokeType.textContent = `${poke.types[0].type.name}`;
        dinamicBackground(pokeType.textContent)

        pokeicon.addEventListener('click', (e) => {
            setTimeout(movePokemonBack, 700);

        })

        pokemonName.addEventListener('click', (e) => {
            pokemonName.textContent = "Gotta Catch 'Em All"
            setTimeout(setNameBack, 1000);

        })

        function setNameBack() {
            pokemonName.textContent = ` ${poke.name}`;
        }

        function movePokemonBack() {
            pokeicon.src = poke.sprites.back_default;
            setTimeout(mySecondTimeOut, 1000);
        }

        function mySecondTimeOut() {
            pokeicon.src = poke.sprites.front_default;
        }

    }

    // background change based on Pokemon`s type
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
    };

    goBtn.addEventListener('click', (e) => {
        randonPokemon();
    });






}