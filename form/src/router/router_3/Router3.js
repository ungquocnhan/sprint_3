import {BrowserRouter, Route, Routes} from "react-router-dom";
import Category3 from "./Category3";
import Product3 from "./Product3";

export default function Router3() {
    return (
        // <BrowserRouter>
            <Routes>
                <Route path="/" element={<Category3 />} />
                <Route path="/product" element={<Product3 />} />
            </Routes>
        // </BrowserRouter>
    );
}
