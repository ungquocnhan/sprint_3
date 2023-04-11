import React, {useState} from "react";
import {Formik} from "formik";
import './BookManagement.css'
export default function BookManagement() {
    const [form, setForm] = useState({
        title: '',
        quantity: ''
    });
    const [bookList, setBookList] = useState([]);
    const [indexSelected, setIndexSelected] = useState(-1);

    function handleValidate() {
        let errors = {};
        if (!form.title) {
            errors.title = 'Required';
        }

        if (!form.quantity) {
            errors.quantity = 'Required';
        }

        return errors;
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setForm({...form, [name]: value});
    }

    function handleSubmit() {
        if (indexSelected > -1) {
            bookList.splice(indexSelected, 1, form);
            setIndexSelected(-1);
        } else {
            bookList.push(form);
        }
        setBookList([...bookList]);
    }

    function handleSelected(index) {
        const editBook = [...bookList];
        const item = editBook[index];
        setForm(item);
        setIndexSelected(index);
    }

    function handleDeleted(index) {
        const deleteBook = [...bookList];
        deleteBook.splice(index, 1);
        setBookList(deleteBook);
    }

    return (
        <>
            <h1>Library</h1>
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
                        ${errors.quantity ? "custom-input-error" : ""}`}>
                                <label>Quantity</label>
                                <input type="number"
                                       name="quantity"
                                       value={form.quantity || ""}
                                       onChange={handleChange}/>
                                <p className="error">{errors.quantity}</p>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    )}
                </Formik>
            </div>
            <div className={"row"}>
                <table>
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bookList.map((book, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td>
                                <button type="button" onClick={() => handleSelected(index)}>Edit</button>
                            </td>
                            <td>
                                <button type="button" onClick={() => handleDeleted(index)}>Delete</button>
                            </td>
                        </tr>
                    ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}
