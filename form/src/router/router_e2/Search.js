import {Link, useSearchParams} from "react-router-dom";

export default function Search() {
    let products = ["Iphone 13 pro", "iphone 12", "Galaxy s22", "zenfone 8"];
    let [searchParams, setSearchParams] = useSearchParams();

    function handleChange(event) {
        let filter = event.target.value;
        if (filter) {
            setSearchParams({filter});
        } else {
            setSearchParams({});
        }
    }

    return (
        <div>
            <Link to="/">Back</Link>
            <br/>
            <input
                value={searchParams.get("filter") || ""}
                onChange={handleChange}
            />
            {products
                .filter(product => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = product.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                })
                .map((product, index) => (
                    <li key={index}>{product}</li>
                ))}

        </div>
    );
}
