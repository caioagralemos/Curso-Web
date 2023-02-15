// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const container = document.querySelector('#container')
let baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

for (let index = 1; index < 151; index++) {
    let pkmn = document.createElement("img")
    pkmn.src = `${baseURL}${index}.png`
    container.appendChild(pkmn)
    
}


