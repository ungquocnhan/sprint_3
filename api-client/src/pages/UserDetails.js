import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export function UserDetails() {
    const { userId } = useParams();
    const isCreate = !userId;
    const [user, setUser] = useState({
        id: 0,
        name: '',
        birthday: ''
    });

    useEffect(() => {
        console.log(userId);
        if (userId) {
            axios.get(`http://localhost:3000/users/${userId}`)
                .then(res => {
                    setUser(res.data);
                })
                .catch(err => {
                    throw err;
                });
        }
    }, [userId]);

    function handleChange(event) {
        const {name, value} = event.target;
        setUser({...user, [name]: value});
    }

    function handleSubmit() {
        axios.post("http://localhost:3000/users", user)
            .then(res => {
                console.log(res.data);
                console.log(
                    `${isCreate ? "Create" : "Edit"} user ${JSON.stringify(
                        res.data
                    )} successfully!!!`
                )
            })
            .catch(err => {
                throw err;
            });
    }

    return (
        <>
        <h1>User Details</h1>
            <form>
                <div>
                    <label>Id</label>
                    <input name="id" value={user.id || ""} onChange={handleChange} />
                </div>
                <div>
                    <label>Name</label>
                    <input name="name" value={user.name || ""} onChange={handleChange} />
                </div>
                <div>
                    <label>Birthday</label>
                    <input
                        type="date"
                        name="birthday"
                        value={user.birthday || ""}
                        onChange={handleChange}
                    />
                </div>
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </>
    )

}
