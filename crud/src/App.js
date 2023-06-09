import './App.css';
import {Header} from "./CRUD/header";
import {Footer} from "./CRUD/footer";
import {Route, Routes} from "react-router-dom";
import {CustomerList} from "./CRUD/customer/CustomerList";
import {Home} from "./CRUD/Home";
import {CustomerCreate} from "./CRUD/customer/CustomerCreate";
import {CustomerEdit} from "./CRUD/customer/CustomerEdit";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/customer-list"} element={<CustomerList/>}></Route>
                <Route path={"/customer-create"} element={<CustomerCreate/>}></Route>
                <Route path={"/customer-edit/:id"} element={<CustomerEdit/>}></Route>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
