import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css'
import Card from "./card/Card";
// import 'bootstrap/dist/js/bootstrap.bundle';
// import 'bootstrap/dist/css/bootstrap.css';
import SignIn from "./signin/SignIn";
import Toastr from "./toastr/Toastr";

// Nhúng tên của bạn vào React Element tạo bởi React.createElement
const name = 'Xin Chao! Ung Quoc Nhan';
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(
    React.createElement("h1", {style: {textAlign: "center"}}, name)
);

//Tạo Element thể hiện danh sách các loại quả
const fruits = ["Apple", "Banana", "Orange", "Apricot", "Black rowan", "Cranberry"];
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(
    <div>
        <h1>List of fruits</h1>
        <table>
            <thead>
            <tr>Danh sach</tr>
            </thead>
            <tbody>
            <tr>
                {fruits.map(item => (
                    <td>{item}</td>
                ))}
            </tr>
            </tbody>
        </table>
        <ul>
            {fruits.map(item => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
);

// Hiển thị thời gian hiện tại (dd/mm/yyyy – hh/mm/ss)
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
const tick = () => {
    root3.render(
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
};
setInterval(tick, 10000);

// Tạo Element thể hiện thông tin của Trình duyệt bạn đang sử dụng
const root4 = ReactDOM.createRoot(document.getElementById("root4"));
root4.render(
    <h1>Browser's details: {navigator.userAgent}</h1>
)

// Tạo Element thể hiện bảng thông tin các sinh viên trong lớp học
const students = [
    {
        company: 'Alfreds Futterkiste',
        contact: 'Maria Anders',
        country: 'Germany'
    },
    {
        company: 'Centro comercial Moctezuma',
        contact: 'Francisco Chang',
        country: 'Mexico'
    },
    {
        company: 'Ernst Handel',
        contact: 'Roland Mendel',
        country: 'Austria'
    },
    {
        company: 'Island Trading',
        contact: 'Helen Bennett',
        country: 'UK'
    },
    {
        company: 'Laughing Bacchus Winecellars',
        contact: 'Yoshi Tannamuri',
        country: 'Canada'
    },
    {
        company: 'Magazzini Alimentari Riuniti',
        contact: 'Giovanni Rovelli',
        country: 'Italy'
    }
]
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <table>
        <thead>
        <tr>
            <th>Company</th>
            <th>Name</th>
            <th>Country</th>
        </tr>
        </thead>
        <tbody>
        {students.map(student => (
            <tr>
                <td>{student.company}</td>
                <td>{student.contact}</td>
                <td>{student.country}</td>
            </tr>
        ))}
        </tbody>
    </table>
)

const root6 = ReactDOM.createRoot(document.getElementById("root6"));
root6.render(
    <React.StrictMode>
        <Card />
    </React.StrictMode>
)

const root7 = ReactDOM.createRoot(document.getElementById("root7"));
root7.render(
    <React.StrictMode>
        <SignIn />
    </React.StrictMode>
)

const root8 = ReactDOM.createRoot(document.getElementById("root8"));
root8.render(
    <React.StrictMode>
        <Toastr />
    </React.StrictMode>
)

