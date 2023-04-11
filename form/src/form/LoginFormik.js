import React, {useState} from "react";
import {Formik} from "formik";
import './Login.css'
export default function LoginFormik() {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

    const [form, setForm] = useState({});

    function handleChange(event) {
        const {name, value} = event.target;
        setForm({...form, [name]: value});
    }

    function handleValidate() {
        let errors = {};
        if (!form.email) {
            errors.email = 'Required';
        } else if (!REGEX.email.test(form.email)) {
            errors.email = 'Invalid email address';
        }
        if (!form.password) {
            errors.password = 'Required';
        }
        return errors;
    }

    function handleSubmit() {
        alert('Login success');
    }

    return (
        <>
            <h1>Login</h1>
            <Formik initialValues={form}
                    onSubmit={handleSubmit}
                    validate={handleValidate}>
                {({errors, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div className={`custom-input ${
                            errors.title ? "custom-input-error" : ""
                        }`}>
                            <label>Email</label>
                            <input type="email"
                                   name="email"
                                   value={form.email || ""}
                                   onChange={handleChange}
                            />
                            <p className="error">{errors.email}</p>
                        </div>
                        <div
                            className={`custom-input ${
                                errors.quantity ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={form.password || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.password}</p>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </>
    );
}
