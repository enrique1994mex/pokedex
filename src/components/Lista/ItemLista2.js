import React from 'react';
import { Button} from 'react-bootstrap';

const ItemLista2 = ({name, id, url, type1, type2, ability}) => {

    console.log("por item lista 2")

    return (
        <tr>
            <td className="text-center align-middle">{id}</td>
            <td className="text-center align-middle">{name}</td>
            <td className="text-center"><img src={url}/></td>
            <td className="text-center align-middle">
                <p>{type1}</p>
                <p>{type2}</p>
            </td>
            <td className="text-center align-middle">{ability}</td>
            <td className="text-center align-middle"><Button variant="secondary" size="sm">Shiny</Button></td>
        </tr>
    )
}

export default ItemLista2; 