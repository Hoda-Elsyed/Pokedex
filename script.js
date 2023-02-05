const contanierEl = document.querySelector('.container')
const pokemonBgColors= {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

fetchAllPokemon()

async function fetchAllPokemon(){
    for (let index = 1; index < 150; index++) {
       getPokemon(index)
    }
}
async function getPokemon(id){
    const pokeAPI = "https://pokeapi.co/api/v2/pokemon/" + id
    const response = await fetch(pokeAPI)
    const data = await response.json()
    creatPokeCard(data)
}
function creatPokeCard(pokemon){
    const pokeID = pokemon.id.toString().padStart(3, '0')
    const type = pokemon.types[0].type.name
    const img = pokemon.sprites.front_shiny
    const pokeCard  = document.createElement('div')
    pokeCard.classList.add('poke-card')
    contanierEl.appendChild(pokeCard)
    pokeCard.innerHTML= `
    <div class="img-container"><img src="${img}" alt=""></div>
    <div class="id">#${pokeID}</div>
    <div class="name">${pokemon.name}</div>
    <small class="type">Type: <span>${type}</span></small>`
    pokeCard.style.background = pokemonBgColors[type] 
}