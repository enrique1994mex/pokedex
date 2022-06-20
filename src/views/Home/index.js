import React from 'react'; 
import { useEffect} from 'react';
import Login from '../Login';
import Layout from '../../components/Layout';
import { fetchPokemons } from '../../redux/actions/pokemon';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'; 

const Home = () => {

    const { isLoading, pokemons, errorPokemons } = useSelector((state) => state.pokemonsReducer);

    //Dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPokemons()); 
    },[])

    console.log(isLoading)
    console.log(pokemons)
    console.log(errorPokemons) 

    const user =  JSON.parse(localStorage.getItem('user'));
    
    return (
        <div>
            {
                user ? <Layout pokemons={pokemons} /> : <Login />
            }
        </div>
    )

}

export default Home; 