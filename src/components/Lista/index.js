import React from 'react';
import { Table} from 'react-bootstrap';
import ItemLista from './ItemLista';
import ItemLista2 from './ItemLista2';
import { useSelector } from 'react-redux'; 

const Lista = ({ pokemons, isLoading }) => {

    const { pokemonsInfo } = useSelector((state) => state.pokemonsReducer);

    if (isLoading) {
        return <div>Cargando...</div>
    }

    return (
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
                        pokemonsInfo.length != 0 ? (
                            pokemonsInfo.map(pokemon => (
                                <ItemLista2 key={pokemon.id} 
                                name={pokemon.name} 
                                id={pokemon.id} 
                                url={pokemon.sprites.front_default}
                                type1={pokemon.types[0].type.name}
                                type2={pokemon.types[1].type.name}
                                ability={pokemon.abilities[0].ability.name} />
                            ))
                        ) : (
                            pokemons.map(pokemon => (
                                <ItemLista key={pokemon} url={pokemon.url} />
                            ))
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Lista;