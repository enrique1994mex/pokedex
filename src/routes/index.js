import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";

const RoutesComponents = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
);

export default RoutesComponents; 