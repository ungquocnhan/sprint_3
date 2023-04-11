import './App.css';
import {GetUserByAxios} from "./pages/GetUserByAxios";
import {Route, Routes} from "react-router-dom";
import {UserDetails} from "./pages/UserDetails";
import {UserArticle} from "./user-article/UserArticle";
import {Todo} from "./todo/Todo";
import {ListBook} from "./management_book/ListBook";
import {CreateBook} from "./management_book/CreateBook";
import {EditBook} from "./management_book/EditBook";

function App() {
    return (
        <div className="App">
            <Routes>
                {/*<Route path="/" element={<GetUserByAxios/>}/>*/}
                {/*<Route path={"/user/:userId"} element={<UserDetails/>}/>*/}
                {/*<Route path={"/user/add"} element={<UserDetails/>}/>*/}
                {/*<Route path={"/user-article"} element={<UserArticle/>}/>*/}
                {/*<Route path={"/todo"} element={<Todo/>}/>*/}
                <Route path={"/book"} element={<ListBook/>}/>
                <Route path={"/create-book"} element={<CreateBook/>}/>
                <Route path={"/edit-book/:id"} element={<EditBook/>}/>
            </Routes>
        </div>
    );
}

export default App;
