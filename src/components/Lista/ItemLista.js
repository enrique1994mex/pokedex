import React from 'react';
import { useState, useEffect } from 'react';
import { Button} from 'react-bootstrap';
import { pokemonInfo } from '../../api';

const ItemLista = ({ url }) => {

    const [info, setInfo] = useState(null);

    useEffect(() => {
        pokemonInfo(url)
            .then(data => {
                setInfo(data)
            })
    }, [])

    if (!info) {
        return <tr></tr>
    }

    return (
        <tr>
            <td className="text-center align-middle">{info.id}</td>
            <td className="text-center align-middle">{info.name}</td>
            <td className="text-center"><img src={info.sprites.front_default}/></td>
            <td className="text-center align-middle">
                <p>{info.types[0].type.name}</p>
                <p>{info.types[1].type.name}</p>
            </td>
            <td className="text-center align-middle">{info.abilities[0].ability.name}</td>
            <td className="text-center align-middle"><Button variant="secondary" size="sm">Shiny</Button></td>
        </tr>
    )
}

export default ItemLista; 