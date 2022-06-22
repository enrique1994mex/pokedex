import React from 'react';
import { useState, useEffect } from 'react';
import { Col, Card } from 'react-bootstrap';
import { pokemonInfo } from '../../api';
import Shiny from '../Shiny';
import { Link } from 'react-router-dom';

const ItemCuadricula = ({ url }) => {

    //Estado de la información del pokemon
    const [info, setInfo] = useState(null);

    //useEffect para traer la información del pokemon de la API
    useEffect(() => {
        pokemonInfo(url)
            .then(data => {
                setInfo(data)
            })
    }, [])

    if (!info) {
        return <Col></Col>
    }

    return (
        <Col xs={6} md={3}>
            <Card>
                <Link to={`/detail/${info.name}`}>
                    <Card.Img variant="top" src={info.sprites.front_default} />
                </Link>
                <Card.Body>
                    <Card.Title>{info.name}</Card.Title>
                    <div className="d-flex">
                        {
                            info.abilities.map((pok, index) => <p className="w-50 text-center" key={index}>{pok.ability.name}</p>)
                        }
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            {
                                info.types.map((pok, index) => <p className="my-0 mx-1" key={index}>{pok.type.name}</p>)
                            }
                        </div>
                        <Shiny name={info.name} shiny={info.sprites.front_shiny} />
                    </div>
                </Card.Body>
            </Card>

        </Col>
    )
}

export default ItemCuadricula; 