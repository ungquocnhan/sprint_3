import React, {useState} from "react";
import Collapse from "./Collapse";

const Expand = () => {
    const [isExpand, setExpand] = useState(false);

    const myStyle = {
        color: "white",
        backgroundColor: "Green",
        padding: "10px",
        fontFamily: "Arial",
        textAlign: "center"
    }

    const handleExpand = () => {
        setExpand(true);
    }

    const handleCollapse = () => {
        setExpand(false);
    }

    if (isExpand) {
        return <Collapse handleCollapse={handleCollapse} />
    }
    return (
        <>
            <h1 style={myStyle}>Conditional Rendering</h1>
            <button onClick={handleExpand}>Expand</button>
        </>
    );
}

export default Expand;
