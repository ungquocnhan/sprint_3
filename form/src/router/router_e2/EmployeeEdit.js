import {useLocation, useNavigate} from "react-router-dom";
import React, {useState} from "react";

export default function EmployeeEdit() {
    const {state} = useLocation();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        id: state.data.id,
        name: state.data.name,
        age: state.data.age
    });

    function handleChange(event) {
        console.log(event.target.value);
        setForm({...form, [event.target.name]: event.target.value});
    }

    function handleSubmit() {
        alert(form.id + form.age);
        const dataEdit = {...form};
        navigate("/employee", {state: {data: dataEdit}});
    }

    return (
        <>
            <form>
                <div>
                    <label>Id </label>
                    <input type="number"
                           name="id"
                           value={form.id}
                           onChange={handleChange}/>
                </div>
                <div>
                    <label>Name </label>
                    <input type="text"
                           name="name"
                           value={form.name}
                           onChange={handleChange}/>
                </div>
                <div>
                    <label>Age </label>
                    <input type="number"
                           name="age"
                           value={form.age}
                           onChange={handleChange}/>
                </div>
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}
