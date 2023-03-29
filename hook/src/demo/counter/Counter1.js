import React from "react";
import {useIncrement} from "./Counter";

export const Counter1 = () => {
    const [count, setCount] = useIncrement(1);

    const increase = () => {
        setCount(count + 1);
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <button type="button" onClick={increase}>Add1</button>
        </>
    )
}
