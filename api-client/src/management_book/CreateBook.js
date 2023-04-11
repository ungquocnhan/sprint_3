import {useState} from "react";
import {Formik} from "formik";
import './CreateBook.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert";

export function CreateBook() {
    const [form, setForm] = useState({});
    const navigate = useNavigate();

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
        axios.post("http://localhost:3000/books", form)
            .then(res => {
                Swal( "", "Create success!", "success");
                navigate("/book");
            })
            .catch(err => {
                throw err
            })
    }

    return (
        <>
            <h1>Create Book</h1>
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
