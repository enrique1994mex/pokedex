const pokemons = async () => {
    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=3&offset=0`)
        .then(response => response.json())
        .then(data => {
            return data.results
        })
        .catch(error => error)
}

export {pokemons}; 


const pokemonInfo = async (url) => {
    return fetch(url)
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch(error => error)
}

export {pokemonInfo}; 