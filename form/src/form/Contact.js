import React, {useState} from "react";
import {Formik} from "formik";

export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const REGEX = {
        name: /^[a-zA-Z\s]{2,}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        phone: /^[0-9]{10}$/,
    };

    function handleValidate() {
        let errors = {};

        if (!form.name) {
            errors.name = 'Required';
        } else if (!REGEX.name.test(form.name)) {
            errors.name = 'Invalid name';
        }

        if (!form.email) {
            errors.email = 'Required';
        } else if (!REGEX.email.test(form.email)) {
            errors.email = 'Invalid email address';
        }

        if (!form.phone) {
            errors.phone = 'Required';
        } else if (!REGEX.phone.test(form.phone)) {
            errors.phone = 'Invalid phone number';
        }

        return errors;
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setForm({...form, [name]: value});
    }

    function handleSubmit() {
        alert('Contact success');
    }

    return (
        <>
            <h1>Contact Form</h1>
            <Formik initialValues={form}
                    onSubmit={handleSubmit}
                    validate={handleValidate}>
                {({errors, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div className={`custom-input 
                        ${errors.name ? "custom-input-error" : ""}`}>
                            <label>Name</label>
                            <input type="text"
                                   name="name"
                                   value={form.name || ""}
                                   onChange={handleChange}/>
                            <p className="error">{errors.name}</p>
                        </div>
                        <div className={`custom-input 
                        ${errors.email ? "custom-input-error" : ""}`}>
                            <label>Email</label>
                            <input type="email"
                                   name="email"
                                   value={form.email || ""}
                                   onChange={handleChange}/>
                            <p className="error">{errors.email}</p>
                        </div>
                        <div className={`custom-input 
                        ${errors.phone ? "custom-input-error" : ""}`}>
                            <label>Phone</label>
                            <input type="number"
                                   name="phone"
                                   value={form.phone || ""}
                                   onChange={handleChange}/>
                            <p className="error">{errors.phone}</p>
                        </div>
                        <div className={`custom-input 
                        ${errors.message ? "custom-input-error" : ""}`}>
                            <label>Message</label>
                            <textarea type="text"
                                      name="name"
                                      value={form.message || ""}
                                      onChange={handleChange}></textarea>
                            <p className="error">{errors.message}</p>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </>
    )

}
