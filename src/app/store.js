import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "../redux/reducers/pokemons"; 

export const store = configureStore({
    reducer: {
      pokemonsReducer,
    },
}); 