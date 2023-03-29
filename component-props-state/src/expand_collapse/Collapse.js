import React from "react";

const Collapse = (props) => {
    const myStyle = {
        color: "white",
        backgroundColor: "Green",
        padding: "10px",
        fontFamily: "Arial",
        textAlign: "center"
    }
    return (
        <>
            <h1 style={myStyle}>Conditional Rendering</h1>
            <button onClick={props.handleCollapse}>Collapse</button>

            <ul>
                <li>Mục tiêu</li>
                <li>Tạo được dự án ReactJS</li>
                <li>Thao tác với state thông qua event</li>
                <li>Thực hành conditional rendering</li>
            </ul>
        </>
    );
}

export default Collapse;
