import React from 'react';
import { Button } from 'react-bootstrap';

const ItemLista = ({ pokemon, url}) => {

    return (
        <>
            <tr>
                <td>{pokemon}</td>
                <td>{pokemon}</td>
                <td>{pokemon}</td>
                <td>{pokemon}</td>
                <td>{pokemon}</td>
                <td><Button variant="secondary" size="sm">Shiny</Button></td>
            </tr>
        </>
    )
}

export default ItemLista; 