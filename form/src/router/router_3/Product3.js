import {useLocation} from "react-router-dom";

export default function Product3() {
    const { state } = useLocation();

    return (
        <div>
            <h3>Id selected {state.categoryId} </h3>
        </div>
    );
}
