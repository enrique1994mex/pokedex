import React from 'react';
import { useEffect } from 'react';
import { Table, Spinner } from 'react-bootstrap';
import ItemLista from './ItemLista';
import { useDispatch } from 'react-redux';
import { fetchPokemons } from '../../redux/actions/pokemon';
import { useSelector } from 'react-redux';

const Lista = () => {

    const { isLoading, pokemons, errorPokemons } = useSelector((state) => state.pokemonsReducer);

    //Dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPokemons());
    }, [])

    if (isLoading) {
        return <Spinner animation="border" variant="secondary"/>
    }

    return (
        //Renderizado de los pokemons en forma de Lista
        <>
            <Table borderless>
                <thead className="text-secondary bg-light">
                    <tr variant="primary">
                        <th className="text-center">#</th>
                        <th className="text-center">Nombre</th>
                        <th className="text-center">Vista Previa</th>
                        <th className="text-center">Tipos</th>
                        <th className="text-center">Habilidades</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //Recorrido de todos los pokemones
                        pokemons.map(pokemon => (
                            <ItemLista key={pokemon.name} url={pokemon.url} />
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Lista;