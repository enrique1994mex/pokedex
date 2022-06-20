const pokemons = async () => {
    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`)
        .then(response => response.json())
        .then(data => {
            return data.results
        })
        .catch(error => error)
}

export {pokemons}; 