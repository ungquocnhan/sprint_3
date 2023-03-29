import React, {useEffect, useState} from "react";

export const Timer = () => {
    const [timer, setTimer] = useState(10);

    useEffect(() => {
        const intervalID = setInterval(() => {
            if (timer > 0) {
                setTimer(timer => timer -1);
            }
            }, 1000

        );
        return () => clearInterval(intervalID);
    })

    return (
        <>
        <h1>Count down from {timer}</h1>
        </>
    )
}
