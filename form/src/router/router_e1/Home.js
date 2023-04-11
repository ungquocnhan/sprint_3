import {useLocation} from "react-router-dom";

export default function Home() {
    const { state } = useLocation();

    return (
        <div>
            <h3>Account login: {state.data.email} </h3>
        </div>
    );
}
