import React, {useState} from "react";

const UseState = () => {
    let [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count++);
    }

    return (
        <>
            <button onClick={handleClick}>
                Increment
            </button>

            <h1>Result: {count}</h1>
        </>
    )
}

export default UseState;
