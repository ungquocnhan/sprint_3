import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Formik} from "formik";
import './CreateBook.css'
import Swal from "sweetalert";

export function EditBook() {
    const [form, setForm] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/books/${id}`)
            .then(res => {
                setForm(res.data);
            })
            .catch(err => {
                throw err;
            })
    }, [id])

    function handleValidate() {
        let errors = {};
        if (!form.title) {
            errors.title = 'Required';
        }

        if (!form.amount) {
            errors.amount = 'Required';
        }

        return errors;
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setForm({...form, [name]: value});
    }

    function handleSubmit() {
        axios.put(`http://localhost:3000/books/${id}`, form)
            .then(res => {
                Swal( "", "Edit success!", "success");
                navigate("/book");
            })
            .catch(err => {
                throw err
            })
    }

    return (
        <>
            <h1>Edit Book</h1>
            <div>
                <Formik
                    initialValues={form}
                    onSubmit={handleSubmit}
                    validate={handleValidate}>
                    {({errors, handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <div className={`custom-input 
                        ${errors.title ? "custom-input-error" : ""}`}>
                                <label>Title</label>
                                <input type="text"
                                       name="title"
                                       value={form.title || ""}
                                       onChange={handleChange}/>
                                <p className="error">{errors.title}</p>
                            </div>
                            <div className={`custom-input 
                        ${errors.amount ? "custom-input-error" : ""}`}>
                                <label>Quantity</label>
                                <input type="number"
                                       name="amount"
                                       value={form.amount || ""}
                                       onChange={handleChange}/>
                                <p className="error">{errors.amount}</p>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    )
}
