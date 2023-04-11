import {Link, useLocation} from "react-router-dom";

import React from "react";

export default function EmployeeDetail() {
    const { state } = useLocation();
    const location = useLocation();
    const params = useLocation();

    return (
        <div>
            <h1>Detail Employee</h1>
            <h3>Id: {state.data.id} </h3>
            <h3>Name: {state.data.name} </h3>
            <h3>Age: {state.data.age} </h3>
            <h3>Path: {location.pathname} </h3>
        </div>
    );
}
