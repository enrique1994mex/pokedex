import React from 'react';
import { useState, useEffect } from 'react';
import { Button} from 'react-bootstrap';
import { pokemonInfo } from '../../api';
import { addPokemon} from '../../redux/actions/pokemon'; 
import { useDispatch } from 'react-redux';

const ItemLista = ({ url }) => {

    //Dispatch
    const dispatch = useDispatch();

    const [info, setInfo] = useState(null);

    useEffect(() => {
        pokemonInfo(url)
            .then(data => {
                setInfo(data)
                dispatch(addPokemon({info:data}))
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