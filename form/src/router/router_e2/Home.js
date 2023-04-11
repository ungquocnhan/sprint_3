import {Link, LinkProps, NavLink, Outlet, useMatch, useResolvedPath} from "react-router-dom";
import React from "react";

function CustomLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to);

    //useMatch trả về true nếu url đang được active
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                to={to}
                {...props}
            >
                {children}
            </Link>
            {match && " (active)"}
        </div>
    );
}
export default function Home() {
    return (
        <>
            <header>
                <ul>
                    <li>
                        <NavLink style={({ isActive }) => {
                            return {
                                display: "block",
                                color: isActive ? "red" : ""
                            };
                        }} to="/hello">Click here</NavLink>
                    </li>
                    <li>
                        <Link to="/search">Demo search</Link>
                    </li>
                    <li>
                        <button>
                            <Link to="/login">Login</Link>
                        </button>
                    </li>
                </ul>
            </header>
            <Outlet/>
        </>
    )
}
