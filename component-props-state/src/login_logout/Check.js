import React, {useState} from "react";
import Home from "./Home";

function Check() {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLogOut = () => {
        setLoggedIn(false)
    }

    const handleLogIn = () => {
        setLoggedIn(true)
    }

    if (isLoggedIn) return (
        <Home onLogOut={handleLogOut}/>
    )
    return (
        <div style={{textAlign: 'center'}}>
            <div>
                <h1>Please Log in</h1>
                <button onClick={handleLogIn}>Log in</button>
            </div>
        </div>
    )
}

export default Check;
