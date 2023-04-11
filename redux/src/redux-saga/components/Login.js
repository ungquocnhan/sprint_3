import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

export function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({});
    const userLogined = useSelector(state => state.userLogined);
    const setValueForUser = (key, value) => {
        const newVal = {...user, [key]: value};
        setUser(newVal);
    }
    const login = () => {
        dispatch({type: "LOGIN", payload: user});
    }
    useEffect(() => {
        if (userLogined.username) {
            navigate("/users");
        }
    }, [userLogined, navigate]);

    return (
        <form>
            <label>User name</label>
            <input
                id="username"
                onChange={e => setValueForUser("username", e.target.value)}
                type="text"
            />
            <label>Password</label>
            <input
                id="password"
                onChange={e => setValueForUser("password", e.target.value)}
                type="password"
            />
            <button
                type="button"
                onClick={() => {
                    login();
                }}
            >
                Login
            </button>
        </form>
    )

}
