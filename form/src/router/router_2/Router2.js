import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Category from "./Category";
import Product from "./Product";

export default function Router2() {
    return (
        // <BrowserRouter>
            <Routes>
                <Route path="/" element={<Category/>}/>
                <Route path="/product/:categoryId" element={<Product/>}/>
            </Routes>
        // </BrowserRouter>
    )
}
