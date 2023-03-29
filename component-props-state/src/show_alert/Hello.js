import React, {useEffect} from "react";

function Hello() {
    useEffect(() => {
            alert('The component is going to be unmounted');
    })

    return (
        <h1>Hello Word !!!</h1>
    )
}

export default Hello;
