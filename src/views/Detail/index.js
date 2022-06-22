import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { pokemonDetail } from "../../api";
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import ItemCarousel from "./ItemCarousel";

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

    console.log(info.sprites)

    return (
        <Container>
            <Row>
                <Col>
                    <Carousel fade variant="dark">
                        {
                            valores.filter(imagen => imagen !== null && typeof imagen !== 'object').map(img => (
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default Detail; 