import {startFetchPokemons, successFetchPokemons, errorFetchPokemons, addPokemon } from '../actions/pokemon';

const initialState = {
    isLoading: true,
    pokemons: {},
    errorPokemons: null,
    pokemonsInfo: []
}

const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case startFetchPokemons.toString():
            return {
                ...state,
                isLoading: true
            }
        case successFetchPokemons.toString():
            return {
                ...state,
                isLoading: false, 
                pokemons: action.payload.info
            }
        case errorFetchPokemons.toString():
            return {
                ...state,
                isLoading: false,
                pokemons: {}, 
                errorPokemons: action.payload
            }
        case addPokemon.toString():
            return {
                ...state,
                pokemonsInfo: [...state.pokemonsInfo, action.payload.info]
            }
        default:
            return state;
    }
}

export default pokemonsReducer; 