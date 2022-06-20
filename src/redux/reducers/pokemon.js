import {startFetchPokemons, successFetchPokemons, errorFetchPokemons} from '../actions/pokemon';

const initialState = {
    isLoading: true,
    pokemons: {},
    errorPokemons: null
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
        default:
            return state;
    }
}

export default pokemonsReducer; 