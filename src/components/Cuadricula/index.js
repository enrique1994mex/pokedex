import React from 'react'; 
import { Container, Row } from 'react-bootstrap';
import ItemCuadricula from './ItemCuadricula';
import { useSelector } from 'react-redux';

const Cuadricula = ({pokemons}) => {

    const {pokemonsInfo} = useSelector((state) => state.pokemonsReducer);

    console.log(pokemonsInfo)

    return(
        <Container>
            <Row className="g-3">
                {
                    pokemons.map(pokemon => (
                        <ItemCuadricula key={pokemon.name} name={pokemon.name}/>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Cuadricula; 