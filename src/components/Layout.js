import React from 'react';
import { useState, useEffect} from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import Lista from '../components/Lista';
import Cuadricula from '../components/Cuadricula'; 
import { useDispatch } from 'react-redux';
import { fetchPokemons } from '../redux/actions/pokemon';

const Layout = () => {

    //Dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPokemons()); 
    },[])

    //Estado de los botones Lista y Cuadrícula
    const [buttonView, setButtonView] = useState(true);

    //Estado del buscador
    const [search, setSearch] = useState(''); 

    //Función para manejar el estado del buscador
    const handleSearch = ({target}) => {
        setSearch(target.value);
    }

    //Función para manejar el estado del botón buscador
    const handleSearchClick = () => {
        console.log(search); 
    }

    //Función para manejar el estado de los botones
    const handleButton = (e) => {
        setButtonView(!buttonView);
    }

    return (
        <div>
            <Container>
                <h1 className='text-secondary fs-3 fw-bold mt-4 mb-3'>Pokédex</h1>
                <Row className="justify-content-between">
                    <Col md={4}>
                        <InputGroup size="lg">
                            <Button variant="outline-secondary" id="button-addon1" onClick={handleSearchClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </Button>
                            <FormControl
                                placeholder="Buscar Pokémon"
                                aria-label="Buscar Pokémon"
                                aria-describedby="basic-addon1"
                                value={search}
                                onChange={handleSearch}
                            />
                        </InputGroup>
                    </Col>
                    <Col md={3} className="my-auto">
                        <Button variant="outline-secondary" className="w-50" active={buttonView} onClick={handleButton}>Lista</Button>
                        <Button variant="outline-secondary" className="w-50" active={!buttonView} onClick={handleButton}>Cuadrícula</Button>
                    </Col>
                </Row>
            </Container>
            <main>
                {
                    buttonView ? <Lista/> :  <Cuadricula/>
                }
            </main>
        </div>
    )
}

export default Layout; 