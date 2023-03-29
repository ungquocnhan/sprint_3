import React from "react";

const PreventDefault = () => {
    const handleClick = (e) => {
        // e.preventDefault();
        console.log('You had clicked a Link.');
    }

    return (
        <a href="https://learn.codegym.vn/courses/reactjs"
           onClick={handleClick}>
            Click_Me
        </a>
    )
}

export default PreventDefault;
