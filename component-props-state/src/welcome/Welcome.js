import React from "react";

function Welcome(props) {
    console.log(props);
    return (
        <>
            <h1 style={{color: "red"}}>Hello: {props.name}</h1>
            <h1 style={{color: "teal"}}>Learn: {props.learn}</h1>
            <h1 style={{color: "brown"}}>Address: {props.address}</h1>
        </>

    );
}

export default Welcome;
