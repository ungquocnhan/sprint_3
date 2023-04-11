import {useEffect, useState} from "react";
import axios from "axios";

export function UserArticle() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = axios.get("http://localhost:3000/users");
        const getArticles = axios.get("http://localhost:3000/articles");
        axios.all([getUsers, getArticles])
            .then(
                axios.spread((res1, res2) => {
                    const users = res1.data.map(user => {
                        return {
                            ...user,
                            article: res2.data.filter(item => {
                                return item.user_id === user.id;
                            })
                        };
                    });
                    setUsers(users);
                    console.log(users)
                })
            )
            .catch(err => {
                throw err;
            })
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Article numbers</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td> {user.name} </td>
                        <td> {user.article.length} </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
