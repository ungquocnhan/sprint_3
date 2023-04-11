import './App.css';
import Welcome from "./welcome/Welcome";
import AddComponent from "./add_component/AddComponent";
import CountClick from "./count_click/CountClick";
import ChangeColor from "./change_color/ChangeColor";
import UseEffect from "./use_effect/UseEffect";
import ShowAlert from "./show_alert/ShowAlert";
import Check from "./login_logout/Check";
import Alert from "./alert/Alert";
import Calculator from "./Calculator/Calculator";
import StudentInfo from "./student_info/StudentInfo";
import Expand from "./expand_collapse/Expand";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./form_login_logout/Login";
import Todo from "./todo/Todo";
import Student from "./management_student/Student";

function App() {
    return (
        <div className="App">
            <Welcome name="UNG QUOC NHAN" learn="CODEGYM" address="Tran Cao Van"/>
            <AddComponent firstNumber={3} secondNumber={6}/>
            <CountClick/>
            <ChangeColor/>
            <UseEffect/>
            <ShowAlert/>
            <Check/>
            <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại."/>
            <Calculator/>
            <StudentInfo/>
            <Expand/>
            <Login/>
            <Todo/>
            <Student/>
        </div>
    );
}

export default App;
