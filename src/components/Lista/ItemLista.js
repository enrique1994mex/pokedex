import React from 'react';
import { useState, useEffect } from 'react';
import { pokemonInfo } from '../../api';
import Shiny from '../Shiny';
import { Link } from 'react-router-dom';

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
            <td className="text-center">
                <Link to={`/detail/${info.name}`}>
                    <img src={info.sprites.front_default} />
                </Link>
            </td>
            <td className="text-center align-middle">
                <p>{info.types[0].type.name}</p>
                <p>{info.types[1].type.name}</p>
            </td>
            <td className="text-center align-middle">{info.abilities[0].ability.name}</td>

            <td className="text-center align-middle"><Shiny name={info.name} shiny={info.sprites.front_shiny} /></td>
        </tr>
    )
}

export default ItemLista; 