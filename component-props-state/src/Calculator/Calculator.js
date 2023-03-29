import React, {useState} from "react";

function Calculator() {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [result, setResult] = useState(0);

    const handleChangeFirstNumber = (firstNumber) => {
        setFirstNumber(firstNumber.target.value);
    }

    const handleChangeSecondNumber = (secondNumber) => {
        setSecondNumber(secondNumber.target.value);
    }


    const addition = () => {
        setResult(Number(firstNumber) + Number(secondNumber));
    }
    const subtraction = () => {
        setResult(Number(firstNumber) - Number(secondNumber));
    }
    const multiplication = () => {
        setResult(Number(firstNumber) * Number(secondNumber));
    }
    const division = () => {
        setResult(Number(firstNumber) / Number(secondNumber));
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1 style={{color: "blue"}}>Calculator Simple</h1>
            <input type="number" value={firstNumber} onChange={handleChangeFirstNumber}/>
            <br/>
            <input type="number" value={secondNumber} onChange={handleChangeSecondNumber}/>
            <br/>
            <button onClick={addition}>+</button>
            <button onClick={subtraction}>-</button>
            <button onClick={multiplication}>*</button>
            <button onClick={division}>/</button>
            <h1>Result: {result}</h1>
        </div>
    )
}

export default Calculator;
