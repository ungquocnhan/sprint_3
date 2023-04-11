import React, {useState} from "react";
import {Formik} from "formik";

export default function MailForm() {
    const [form, setForm] = useState({});

    const REGEX = {
        to: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setForm({...form, [name]: value});
    }

    function handleValidate() {
        let errors = {};

        if (!form.to) {
            errors.to = 'Required';
        } else if (!REGEX.to.test(form.to)) {
            errors.to = 'Invalid email to';
        }

        if (!form.title) {
            errors.title = 'Required';
        }

        if (!form.message) {
            errors.message = 'Required';
        }

        return errors;
    }

    function handleSubmit() {
        alert('Send success');
    }

    return (
        <>
            <h1>Mail form</h1>
            <Formik
                initialValues={form}
                onSubmit={handleSubmit}
                validate={handleValidate}>
                {({errors, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div className={`custom-input 
                        ${errors.to ? "custom-input-error" : ""}`}>
                            <label>To</label>
                            <input type="email"
                                   name="to"
                                   value={form.to}
                                   onChange={handleChange}/>
                            <p className="error">{errors.to}</p>
                        </div>
                        <div className={`custom-input 
                        ${errors.title ? "custom-input-error" : ""}`}>
                            <label>Title</label>
                            <input type="text"
                                   name="title"
                                   value={form.title}
                                   onChange={handleChange}/>
                            <p className="error">{errors.title}</p>
                        </div>
                        <div className={`custom-input 
                        ${errors.message ? "custom-input-error" : ""}`}>
                            <label>Message</label>
                            <textarea type="text"
                                   name="message"
                                   value={form.message}
                                   onChange={handleChange}/>
                            <p className="error">{errors.message}</p>
                        </div>
                        <div>
                            <input type="file" name='file' accept="image/png, image/jpeg" multiple/>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </>
    )
}
