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

    return (
        <Container>
            <Row className="g-3 gx-3">
                <Col md={12}>
                    <Carousel fade variant="dark">
                        {
                            valores.filter(imagen => imagen !== null && typeof imagen !== 'object').map((img,index) => (
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
                        <div>{info.types[0].type.name}</div>
                    </Stack>
                </Col>
                <Col xs={12} md={4} className="bg-light border">
                    <h2>Movimientos</h2>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{info.moves[0].move.name}</ListGroup.Item>
                        <ListGroup.Item>{info.moves[1].move.name}</ListGroup.Item>
                        <ListGroup.Item>{info.moves[2].move.name}</ListGroup.Item>
                        <ListGroup.Item>{info.moves[3].move.name}</ListGroup.Item>
                        <ListGroup.Item>{info.moves[4].move.name}</ListGroup.Item>
                        <ListGroup.Item>{info.moves[5].move.name}</ListGroup.Item>
                        <ListGroup.Item>{info.moves[6].move.name}</ListGroup.Item>
                        <ListGroup.Item>{info.moves[7].move.name}</ListGroup.Item>
                        <ListGroup.Item>{info.moves[8].move.name}</ListGroup.Item>
                        <ListGroup.Item>{info.moves[9].move.name}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col xs={12} md={8} className="bg-light border">
                    <h2>Habilidades</h2>
                    <p className="w-50 text-center">{info.abilities[0].ability.name}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Detail; 