import React from 'react';
import { Table} from 'react-bootstrap';
import ItemLista from './ItemLista';

const Lista = ({ pokemons, isLoading }) => {

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
                        pokemons.map(pokemon => (
                            <ItemLista key={pokemon.name} pokemon={pokemon.name} url={pokemon.url} />
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Lista;