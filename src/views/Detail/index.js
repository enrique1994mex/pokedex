import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { pokemonDetail } from "../../api";

const Detail = () => {

    const { pokemon } = useParams();

    const [info, setInfo] = useState(null);

    useEffect(() => {
        pokemonDetail(pokemon)
            .then(data => {
                setInfo(data)
            })
    }, [])

    console.log(info)

    return(
        <div>
            Detail
        </div>
    )
}

export default Detail; 