import React, {useState} from "react";

export const CarSelection = () => {
    const carList = [
        {id: 1, name: 'Mercedes S600'},
        {id: 2, name: 'Ford EcoSport 2021'},
        {id: 3, name: 'Porsche 718 2021'},
        {id: 4, name: 'Mazda BT-50 2021'},
        {id: 5, name: 'VinFast Lux SA2.0 2021'},
    ];
    const colorList = ['Black', 'White', 'Yellow', 'Blue', 'Red'];
    const [selectedCar, setSelectedCar] = useState('');
    const [selectedColor, setSelectedColor] = useState('');

    const choiceCar = (e) => {
        const value = e.target.value;
        setSelectedCar(prevState => {
            return value;
        })
    }

    const choiceColor = (e) => {
        const value = e.target.value;
        setSelectedColor(prevState => {
            return value;
        })
    }


    return (
        <div>
            Select a car <select
            onChange={e => {
                choiceCar(e);
            }}
        >
            {carList.map((car, index) => (
                <option key={car.id} value={car.name}>{car.name}</option>
            ))}
        </select>
            <br/>
            Select a color <select
            onChange={e => {
                choiceColor(e);
            }}
        >
            {colorList.map((item, index) => (
                <option key={index} value={item}>{item}</option>
            ))}
        </select>
            <h2>You selected a {selectedColor} - {selectedCar}</h2>
        </div>
    )
}
