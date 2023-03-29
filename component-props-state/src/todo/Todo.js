import React, {useRef, useState} from "react";

const Todo = () => {
    let i = 0;
    const [isInput, setInput] = useState(false);
    const [item, setItem] = useState('');
    const [list, setList] = useState([]);
    // const inputRef = useRef(null);

    const handleChange = (event) => {
        setItem(event.target.value)
        setInput(true)
    }

    const handleAddItem = () => {
        // const inputValue = inputRef.current.value;
        if (isInput){
            setList([...list, item])
        }
        // setList([...list, inputValue])
        // inputRef.current.value = '';
    }


    return (

        <>
            <h1>Todo List</h1>
            <input type="text" value={item} onChange={handleChange}/>
            <br/>
            {/*<input type="text" ref={inputRef}/>*/}
            {/*<br/>*/}
            <button onClick={handleAddItem}>Add</button>
            <ul>{
                list.map(item => {
                    return <li key={i++}>{item}</li>
                })
            }</ul>
        </>
    )
}
export default Todo;
