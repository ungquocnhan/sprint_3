import React from "react";
import './StudentInfo.css'
function StudentInfo() {
    const students = [
        {
            id: 1,
            name: "NhanUQ",
            age: 32,
            address: "Đà Nẵng"
        },
        {
            id: 2,
            name: "UngQN",
            age: 31,
            address: "Đà Nẵng"
        },
        {
            id: 3,
            name: "NhanQU",
            age: 30,
            address: "Đà Nẵng"
        },
        {
            id: 4,
            name: "UngNQ",
            age: 29,
            address: "Đà Nẵng"
        },
        {
            id: 5,
            name: "QuocUN",
            age: 28,
            address: "Đà Nẵng"
        },
        {
            id: 6,
            name: "QuocNU",
            age: 27,
            address: "Đà Nẵng"
        },
        {
            id: 7,
            name: "Nhan Quoc",
            age: 26,
            address: "Đà Nẵng"
        },
        {
            id: 8,
            name: "Nhan Ung",
            age: 25,
            address: "Đà Nẵng"
        },
        {
            id: 9,
            name: "Ung Nhan",
            age: 24,
            address: "Đà Nẵng"
        },
    ];

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>

                {students.map(student => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.address}</td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    )
}

export default StudentInfo;
