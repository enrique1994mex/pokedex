import React from 'react'; 
import { Container, Row } from 'react-bootstrap';
import ItemCuadricula from './ItemCuadricula';

const Cuadricula = ({pokemons}) => {

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