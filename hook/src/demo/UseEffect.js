import React, {useEffect, useState} from "react";

const UseEffect = () => {
    let [valueSelected, setValueSelected] = useState('');
    let [selected, setSelected] = useState('');

    useEffect(() => {
            switch (selected) {
                case "0":
                    setValueSelected("Java");
                    break;
                case "1":
                    setValueSelected("Angular");
                    break;
                case "2":
                    setValueSelected("Javascript");
                    break;
                case "3":
                    setValueSelected("Php");
                    break;
                default:
            }
        }, [selected]
    );

    const choice = e => {
        setSelected(e.target.value);
    };

    return (
        <div>
            Khoá học :
            <select
                onChange={e => {
                    choice(e);
                }}
            >
                <option value="0">Java</option>
                <option value="1">Angular</option>
                <option value="2">Javascript</option>
                <option value="3">Php</option>
            </select>
            <h2>Your selected: {valueSelected}</h2>
        </div>
    );

}

export default UseEffect;
