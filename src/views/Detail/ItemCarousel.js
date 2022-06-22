import React from "react";
import { Carousel } from 'react-bootstrap';

const ItemCarousel = ({url}) => {

    return (
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={url}
                alt="First slide"
            />
            <Carousel.Caption>
                <h5>Sprite</h5>
            </Carousel.Caption>
        </Carousel.Item>
    )
}

export default ItemCarousel;