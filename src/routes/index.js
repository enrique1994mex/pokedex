import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Detail from '../views/Detail';

const RoutesComponents = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="detail/:pokemon" element={<Detail/>}/>
        </Routes>
    </BrowserRouter>
);

export default RoutesComponents; 