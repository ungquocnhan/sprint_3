import {NavLink, useLocation, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Link from "./Link";

export default function Employee() {
    const {state} = useLocation();
    let navigate = useNavigate();
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: "Hoa",
            age: 20
        },
        {
            id: 2,
            name: "Khánh",
            age: 25
        },
        {
            id: 3,
            name: "Tú",
            age: 22
        },
    ]);


    function handleDetail(index) {
        const employeeList = [...employees];
        const data = employeeList[index];
        navigate("/employee-detail", {state: {data: data}});
    }

    function handleEdit(index) {
        const editList = [...employees];
        const data = editList[index];
        navigate("/employee-edit", {state: {data: data}});
    }

    return (
        <div>
            <h3 style={{color: "blue"}}>Account login: {state.data.email} </h3>

            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Detail</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                {employees.map((employee, index) => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.age}</td>
                        <td>
                            <button type="button" onClick={() => handleDetail(index)}>Detail</button>
                        </td>
                        <td>
                            <button type="button" onClick={() => handleEdit(index)}>Edit</button>
                        </td>
                    </tr>
                ))
                }
                </tbody>
            </table>

        </div>
    );
}
