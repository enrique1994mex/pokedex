import React from 'react';
import { useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import ItemCuadricula from './ItemCuadricula';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchPokemons } from '../../redux/actions/pokemon';

const Cuadricula = () => {

    const { isLoading, pokemons, errorPokemons } = useSelector((state) => state.pokemonsReducer);

    //Dispatch
    const dispatch = useDispatch();

    //useEffect para traer la información de los pokemons
    useEffect(() => {
        dispatch(fetchPokemons());
    }, [])

    //Carga de la información de los pokemons
    if (isLoading) {
        return <Spinner animation="border" variant="secondary"/>
    }

    return (
        <Container>
            <Row className="g-3">
                {
                    pokemons.map(pokemon => (
                        <ItemCuadricula key={pokemon.name} url={pokemon.url} />
                    ))
                }
            </Row>
        </Container>
    )
}

export default Cuadricula; 