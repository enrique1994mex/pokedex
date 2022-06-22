import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { pokemonDetail } from "../../api";
import { Carousel, Container, Row, Col, Stack, ListGroup } from 'react-bootstrap';

const Detail = () => {

    const { pokemon } = useParams();

    const [info, setInfo] = useState(null);

    useEffect(() => {
        pokemonDetail(pokemon)
            .then(data => {
                setInfo(data)
            })
    }, [])

    if (!info) {
        return <Container></Container>
    }

    let valores = Object.values(info.sprites);

    function NuevoArray (arrayPam) {
        let miArray = [];
        let numArra = 0;
        while((miArray.length < 10) && (arrayPam[numArra] !== undefined )) {
            miArray.push(arrayPam[numArra])
            numArra++;
        }
        return miArray
    }

    const arrayMoves = NuevoArray(info.moves)

    return (
        <Container>
            <Row className="g-3 gx-3">
                <Col md={12}>
                    <Carousel fade variant="dark">
                        {
                            valores.filter(imagen => imagen !== null && typeof imagen !== 'object').map((img, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-50 h-25"
                                        src={img}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                </Col>
                <Col xs={12} md={8} className="bg-light border">
                    <Stack direction="horizontal" gap={3}>
                        <div>{info.name}</div>
                        {
                            info.types.map((pok, index) => <p key={index}>{pok.type.name}</p>)
                        }
                    </Stack>
                </Col>
                <Col xs={12} md={4} className="bg-light border">
                    <h2>Movimientos</h2>
                    <ListGroup variant="flush">
                        {
                            arrayMoves.map((pok,index) => <ListGroup.Item key={index}>{pok.move.name}</ListGroup.Item>)
                        }
                    </ListGroup>
                </Col>
                <Col xs={12} md={8} className="bg-light border">
                    <h2>Habilidades</h2>
                    {
                        info.abilities.map((pok, index) => <p className="w-50 text-center" key={index}>{pok.ability.name}</p>)
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Detail; 