const pokemons = async () => {
    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`)
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


const pokemonDetail = async (name) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch(error => error)
}

export {pokemonDetail}