import React from 'react';
import { Table, Button } from 'react-bootstrap';

const Lista = ({ pokemons, isLoading }) => {

    if (isLoading) {
        return <div>Cargando...</div>
    }

    console.log(pokemons)

    return (
        <>
            <Table variant="primary">
                <thead className="text-secondary">
                    <tr>
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
                            <tr>
                                <td>{pokemon.name}</td>
                                <td>{pokemon.name}</td>
                                <td>{pokemon.name}</td>
                                <td>{pokemon.name}</td>
                                <td>{pokemon.name}</td>
                                <Button>Shiny</Button>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Lista;