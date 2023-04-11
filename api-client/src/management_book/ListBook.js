import {useEffect, useState} from "react";
import axios from "axios";
import './ListBook.css'
import {Link} from "react-router-dom";
import Paginator from "react-hooks-paginator";
import Swal from 'sweetalert';

export function ListBook() {
    const [listBook, setListBook] = useState([]);
    const pageLimit = 3;
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);
    const [form, setForm] = useState({});
    const [message, setMessage] = useState('');

    function getListBooks() {
        axios.get(`http://localhost:3000/books`)
            .then(res => {
                console.log(res.data);
                setListBook(res.data);
            })
            .catch(err => {
                throw err;
            })
    }

    useEffect(() => {
        getListBooks();
    }, [])

    useEffect(() => {
        setCurrentData(listBook.slice(offset, offset + pageLimit));
    }, [listBook, offset]);

    function handleDelete(id) {
        Swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`http://localhost:3000/books/${id}`)
                        .then(() => {
                            Swal("Your file has been deleted!", {
                                icon: "success",
                            });
                            getListBooks();
                        })
                        .catch(err => {
                            throw err;
                        })

                } else {
                    Swal("Your imaginary file is safe!");
                }
            });
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setForm({...form, [name]: value});
    }

    function handleSubmit() {
        if (form.search === "") {
            getListBooks();
        } else {
            axios.get(`http://localhost:3000/books?amount=` + form.search)
                .then(res => {
                    if (res.data.length > 0) {
                        Swal("", "Search success!", "success");
                        setListBook(res.data);
                    } else {
                        setListBook([]);
                        setMessage('Not found');
                    }

                })
                .catch(err => {
                    throw err;
                })
        }
    }

    return (
        <>
            <h1>Book management</h1>
            <div className="row">
                <div className="col-6">
                    <Link to="/create-book">Create book</Link>
                </div>
                <div className="col-6">
                    <form>
                        <input type="text"
                               name="search"
                               value={form.search || ""}
                               onChange={handleChange}/>
                        <button type="button" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>

            <div>
                <table>
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>

                    {currentData.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.amount}</td>
                                <td><Link to={`/edit-book/${item.id}`}>Edit</Link></td>
                                <td>
                                    <button type="button" onClick={() => handleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    )}

                    </tbody>
                </table>

                <Paginator
                    totalRecords={listBook.length}
                    pageLimit={pageLimit}
                    pageNeighbours={3}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <h1>{message}</h1>
            </div>
        </>
    )
}
