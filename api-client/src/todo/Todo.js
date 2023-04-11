import {useEffect, useState} from "react";
import axios from "axios";

export function Todo() {
    const [form, setForm] = useState({});
    const [todoList, setTodoList] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/todoes`)
            .then(res => {
                setTodoList(res.data);
            })
            .catch(err => {
                throw err;
            })
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setForm({...form, [name]: value});
    }

    function handleSubmit() {
        axios.post("http://localhost:3000/todoes", form)
            .then(res => {
                console.log(`Create todo ${JSON.stringify(res.data)} successfully`);
            })
            .catch(err => {
                throw err
            })
    }

    return (
        <>
            <h1>Todo List</h1>
            <div>
                <form>
                    <div>
                        <input name="name" value={form.name || ""} onChange={handleChange}/>
                    </div>
                    <button type="button" onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
            <div>
                <ul>
                    {todoList.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}
