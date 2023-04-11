import './App.css';
import SignUp from "./form/SignUp";
import Login from "./form/Login";
import LoginFormik from "./form/LoginFormik";
import {Link, Outlet, Route, Routes} from "react-router-dom";
import Home from "./router/router_1/Home";
import About from "./router/router_1/About";
import Contract from "./router/router_1/Contract";
import Router2 from "./router/router_2/Router2";
import Router3 from "./router/router_3/Router3";
import Contact from "./form/Contact";
import BookManagement from "./form/BookManagement";
import MailForm from "./form/MailForm";
import RouterLogin from "./router/router_e1/RouterLogin";
import RouterE2 from "./router/router_e2/RouterE2";
import React from "react";

function App() {
    return (
        <div className="App">
            {/*<SignUp/>*/}
            {/*<Login/>*/}
            {/*<LoginFormik/>*/}
            {/*<ul>*/}
            {/*    <li>*/}
            {/*        <Link to="/">Home</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to="/about">About</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to="/contact">Contact</Link>*/}
            {/*    </li>*/}

            {/*    <hr />*/}
            {/*    <Routes>*/}
            {/*        <Route path="/" element={<Home />} />*/}
            {/*        <Route path="/about" element={<About />} />*/}
            {/*        <Route path="/contact" element={<Contract />} />*/}
            {/*    </Routes>*/}
            {/*</ul>*/}

            {/*<Router2/>*/}
            {/*<Router3/>*/}
            {/*<Contact/>*/}
            {/*<BookManagement/>*/}
            {/*<MailForm/>*/}
            {/*<RouterLogin/>*/}
            <RouterE2/>
        </div>
    );
}

export default App;
