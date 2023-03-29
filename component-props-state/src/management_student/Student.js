import React, {useEffect, useState} from "react";

const Student = () => {
    let i = 1;
    const [studentList, setStudentList] = useState([]);
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [isValid, setValid] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [indexSelected, setIndexSelected] = useState(-1);

    useEffect(() => {

    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]: value})
    }

    const handleSubmit = () => {
        if (form.name && form.email && form.phone) {
            setValid(true)
            setSubmitted(true);
            if (indexSelected > -1) {
                studentList.splice(indexSelected, 1, form);
                setIndexSelected(-1);
            } else {
                studentList.push(form);
            }
            setStudentList([...studentList]);
        }

    }

    const handleSelected = (index) => {
        const editStudent = [...studentList];
        const item = editStudent[index];
        setForm(item);
        setIndexSelected(index);
    }

    const handleDeleted = (index) => {
        const deleteStudent = [...studentList];
        deleteStudent.splice(index, 1);
        setStudentList(deleteStudent);
    }

    return (
        <>
            <div>
                <div className={"row"}>
                    <div className={"col-lg-3"}></div>
                    <div className={"col-lg-6"}>
                        <h1>Student List</h1>
                        <div>
                            <label>Name: </label>
                            <input type="text" name="name" value={form.name} onChange={handleChange}/>
                            {submitted && !form.name ?
                                <span style={{color: "red"}}><br/>Please enter name.</span> : null}
                        </div>
                        <div>
                            <label>Phone: </label>
                            <input type="number" name="phone" value={form.phone} onChange={handleChange}/>
                            {submitted && !form.phone ?
                                <span style={{color: "red"}}><br/>Please enter phone.</span> : null}
                        </div>
                        <div>
                            <label>Email: </label>
                            <input type="email" name="email" value={form.email} onChange={handleChange}/>
                            {submitted && !form.email ?
                                <span style={{color: "red"}}><br/>Please enter email.</span> : null}
                        </div>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                    <div className={"col-lg-3"}></div>
                </div>

            </div>

            <div className={"row"}>
                <table>
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {studentList.map((item, index) => (
                        <tr key={i++}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
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
export default Student;
