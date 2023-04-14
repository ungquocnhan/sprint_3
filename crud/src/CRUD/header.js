import React from "react";
import {Link} from "react-router-dom";

export function Header() {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg" style={{background: "#91A9F7"}}>
                    <div className="container-fluid">
                        <Link className="navbar-brand mx-5" to="/">
                            <img
                                src="../CRUD/image/logo@2x.png"
                                height="100"
                                alt="Furama Logo"
                                loading="lazy"
                                style={{marginTop: "-1px"}}
                            />
                        </Link>
                        <div className="collapse navbar-collapse justify-content-center me-2">
                            <div>
                                <Link className="nav-link" to="/" style={{fontSize: 45, color: "#F58C22"}}>Furama
                                    Resort</Link>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <button type="button" className="btn btn-sm px-3 me-2" style={{background: "#91A9F7"}}>
                                Login
                            </button>
                        </div>

                    </div>
                </nav>
            </div>

            <nav className="navbar sticky-top navbar-expand-sm" style={{background: "#4770F5"}}>
                <div className="container-fluid menu w-100 js-main-menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link nav-a-tag" to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-a-tag" to="#">EMPLOYEE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-a-tag" to="/customer-list">CUSTOMER</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  nav-a-tag" to="/facility/list">FACILITY</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  nav-a-tag" to="/contract/list">CONTRACT</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
