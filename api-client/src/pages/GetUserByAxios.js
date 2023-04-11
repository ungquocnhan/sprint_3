import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

// export class GetUserByAxios extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             users: []
//         }
//     }
//
//     componentDidMount() {
//         axios.get("http://localhost:3000/users")
//             .then(res => {
//                 this.setState({users: res.data})
//             })
//             .catch(err => {
//                 throw err;
//             })
//     }
//
//     render() {
//         const {users} = this.state;
//         return (
//             <div>
//                 <h1>Users</h1>
//                 <ul>
//                     {users.map(user => (
//                         <li key={user.id}> {user.name} </li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }


export function GetUserByAxios() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getUser().then(res => {
                setUsers(res.data);
            }
        ).catch(err => {
            throw err;
        })
            .finally(() => {
                setLoading(false);
            })

    }, []);

    /**
     * Loading with promise
     * @return {Promise<unknown>}
     */
    // const getUser = () => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             axios.get("http://localhost:3000/users")
    //                 .then(res => {
    //                     resolve(res);
    //                 })
    //                 .catch(err => {
    //                     reject(err);
    //                 });
    //         }, 3000);
    //     });
    // };

    /**
     * Loading with async/await
     * @return {Promise<axios.AxiosResponse<any>>}
     */
    const getUser = async () => {
            await new Promise((resolve) => {
                setTimeout(resolve,3000);
            });
            return await axios.get("http://localhost:3000/users");
        };

    const handleCreate = () => {
        window.location.href = "/user/add";
    };

    if (loading) return <p>Loading...</p>
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/user/${user.id}`}> {user.name} </Link>
                    </li>
                ))}
                <button type="button" onClick={handleCreate}>
                    Create
                </button>
            </ul>
            <Link to="/user-article"> User article</Link>
        </div>
    );
}
