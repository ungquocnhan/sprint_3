import {Outlet, Route, Routes} from "react-router-dom";
import LoginAccount2 from "./LoginAccount2";
import Employee from "./Employee";
import EmployeeDetail from "./EmployeeDetail";
import Link from "./Link";
import Search from "./Search";
import Home from "./Home";
import React from "react";
import EmployeeEdit from "./EmployeeEdit";

export default function RouterE2() {
    return (
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="/hello" element={<Link/>}/>
                    <Route path="/login" element={<LoginAccount2 />}/>
                    <Route path="/employee" element={<Employee />} />
                    <Route path="/employee-detail" element={<EmployeeDetail />} />
                    <Route path="/employee-edit" element={<EmployeeEdit/>}/>
                </Route>
                <Route path="/search" element={<Search/>}></Route>
                <Route path="*" element={
                        <h1 style={{ padding: "1rem", color: "red" }}>
                            <p>There's nothing here!</p>
                        </h1>
                    }
                />
            </Routes>
    );
}
