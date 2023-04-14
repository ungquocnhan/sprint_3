import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert";

export function CustomerList() {
    const [formSearch, setFormSearch] = useState({});
    const [customerList, setCustomerList] = useState([]);
    const [message, setMessage] = useState('');

    function getCustomerList() {
        axios.get(`http://localhost:3000/customer`)
            .then(res => {
                setCustomerList(res.data);
            })
            .catch(err => {
                throw err;
            })
    }

    useEffect(() => {
        getCustomerList();
    }, [])

    function handleChange(event) {
        const {name, value} = event.target;
        setFormSearch({...formSearch, [name]: value});
    }

    function handleSubmit() {
        if (formSearch.search === "") {
            getCustomerList();
        } else {
            axios.get(`http://localhost:3000/customer?phoneNumber=` + formSearch.search)
                .then(res => {
                    if (res.data.length > 0) {
                        Swal("", "Search success", "success")
                        setCustomerList(res.data);
                    } else {
                        setCustomerList([]);
                        setMessage('Not found');
                    }

                })
                .catch(err => {
                    throw err;
                })
        }
    }

    function handleDelete(id) {
        axios.delete(`http://localhost:3000/customer/${id}`)
            .then(() => {

            })
            .catch(err => {
                throw err;
            })
    }

    return (
        <>
            <nav className="navbar sticky-top mt-3" style={{background: "#388CDB"}}>
                <div className="container-fluid">
                    <Link className="btn btn-sm" style={{background: "#E88246"}}
                          to="/customer-create">Create customer
                    </Link>
                    <h1>Customer Management</h1>
                    <form className="d-flex">
                        <input className="form-control-sm me-2"
                               type="text"
                               name="search"
                               value={formSearch.search || ""}
                               onChange={handleChange}
                               placeholder="Search"/>
                        <button className="btn btn-sm"
                                style={{background: "#E8C431"}}
                                type="button"
                                onClick={handleSubmit}>Search
                        </button>
                    </form>
                </div>
            </nav>
            <div style={{width: "96%", marginLeft: "2%", marginTop: "2%", marginBottom: "2%" }}>
                <table className="table table-success table-striped">
                    <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Name customer</th>
                        <th scope="col">Birthday</th>
                        <th scope="col">Gender</th>
                        <th scope="col">ID Card</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Customer Type</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                    </thead>
                    <tbody>

                    {customerList.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.birthday}</td>
                            <td>{customer.gender ? "Male" : "Female"}</td>
                            <td>{customer.idCard}</td>
                            <td>{customer.phoneNumber}</td>
                            <td>{customer.email}</td>
                            <td>{customer.address}</td>
                            <td>{customer.customerType.name}</td>
                            <td>
                                <Link to={`/customer-create/${customer.id}`}>Edit</Link>
                            </td>
                            <td>
                                <button type="button" onClick={() => handleDelete(customer.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>

                <h1 style={{color: "red"}}>{message}</h1>
            </div>
        </>
    )

}
