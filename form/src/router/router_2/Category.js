import {useNavigate} from "react-router-dom";

export default function Category() {
    let navigate = useNavigate();
    const sendDataToProduct = event => {
        navigate(`/product/${event.target.value}`);
    }

    return (
        <>
            <h2>Selected a Category:</h2>
            <select defaultValue="default" onChange={e => sendDataToProduct(e)}>
                <option value="default" disabled hidden>
                    Choose your car
                </option>
                <option value="1">Honda</option>
                <option value="2">Suzuki</option>
                <option value="3">Yamaha</option>
            </select>
        </>
    )
}
