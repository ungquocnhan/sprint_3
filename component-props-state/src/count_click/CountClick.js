import React, {useState} from "react";

function CountClick(props) {
    const [number, setNumber] = useState(0);


    const decrease = () => {
        setNumber(number - 1)
    }

    const increase = () => {
        setNumber(number + 1)
    }

    return (
        <div style={{textAlign: "center", padding: 30}}>
            <button onClick={decrease}>Decrease</button>
            <span style={{padding: 10}}>{number}</span>
            <button onClick={increase}>Increase</button>
        </div>
    )
}

export default CountClick;
