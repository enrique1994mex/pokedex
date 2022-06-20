import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "../redux/reducers/pokemon"; 

export const store = configureStore({
    reducer: {
      pokemonsReducer  
    },
}); 