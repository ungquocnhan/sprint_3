import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginAccount from "./LoginAccount";
import Home from "./Home";


export default function RouterLogin() {
    return (
        // <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginAccount />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        // </BrowserRouter>
    );
}
