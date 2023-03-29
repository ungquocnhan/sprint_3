import React, {useState} from "react";
import Hello from "./Hello";

function ShowAlert() {
    const [display, setDisplay] = useState(true);

    const deleteHello = () => {
        setDisplay(false);
    }

    let comp;
    if (display) {
        comp = <Hello />;
    }
    return (
        <div style={{textAlign: "center"}}>
            {comp}
            <button onClick={deleteHello}>
                Delete the component
            </button>
        </div>
    )
}

export default ShowAlert;
