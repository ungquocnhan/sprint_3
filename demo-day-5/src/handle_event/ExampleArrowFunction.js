import React, {useState} from "react";

const ExampleArrowFunction = () => {
    // let shoot = (a) => {
    //     alert(a);
    // }
    //
    // return (
    //     <button onClick={() => shoot("Goal")}>Take the shot!</button>
    // );


    const [isToggleOn, setIsToggleOn] = useState(true);
    const handleClick = () => {
        setIsToggleOn(!isToggleOn);
    }

    return (
        <button  onClick={handleClick}>
           <h1>{isToggleOn ? 'ON' : 'OFF'}</h1>
        </button>
    )
}

export default ExampleArrowFunction;
