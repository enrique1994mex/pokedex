import React from 'react';
import { useState, useEffect } from 'react';
import { Col, Card } from 'react-bootstrap';
import { pokemonInfo } from '../../api';
import Shiny from '../Shiny';
import { Link } from 'react-router-dom';

const ItemCuadricula = ({ url }) => {

    const [info, setInfo] = useState(null);

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
                        <p className="w-50 text-center">{info.abilities[0].ability.name}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <p className="my-0">{info.types[0].type.name}</p>
                        </div>
                        <Shiny name={info.name} shiny={info.sprites.front_shiny} />
                    </div>
                </Card.Body>
            </Card>

        </Col>
    )
}

export default ItemCuadricula; 