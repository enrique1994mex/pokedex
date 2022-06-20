import { createAction } from '@reduxjs/toolkit';
import { pokemons } from '../../api';

export const startFetchPokemons = createAction('START_FETCH_POKEMONS');
export const successFetchPokemons = createAction('SUCCESS_FETCH_POKEMONS');
export const errorFetchPokemons = createAction('ERROR_FETCH_POKEMONS');

export const fetchPokemons = () => async (dispatch) => {

    //Iniciar la llamada a la API
    pokemons()
        .then(info => {
            dispatch(startFetchInfoActor());
            dispatch(successFetchInfoActor({ info }));
        })
        .catch(error => {
            dispatch(errorFetchInfoActor(error.message))
        })
}
