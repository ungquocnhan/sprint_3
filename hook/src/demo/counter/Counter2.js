import React from "react";
import {useIncrement} from "./Counter";

export const Counter2 = () => {
    const [count, setCount] = useIncrement(2);

    const increase = () => {
        setCount(count + 2);
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <button type="button" onClick={increase}>Add2</button>
        </>
    )
}
