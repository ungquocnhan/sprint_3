import React, {useState} from "react";
import Logout from "./Logout";
import "bootstrap/dist/css/bootstrap.css";
const Login = () => {
    const [submitted, setSubmitted] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [form, setForm] = useState({
        email: '',
        password: '',
        isRemember: false
    })

    const handleLogOut = () => {
        setIsLoggedIn(false)
    }


    const handleChangeEmail = (event) => {
        setForm({...form, email: event.target.value})
    }

    const handleChangePassword = (event) => {
        setForm({...form, password: event.target.value})
    }

    const handleChangeCheckbox = (event) => {
        setForm({...form, isRemember: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (form.email && form.password) {
            setIsValid(true)
            setSubmitted(true)
            setIsLoggedIn(true)
        }


    }


    if (isLoggedIn) return (<Logout onLogOut={handleLogOut}/>)
    return (
        <>
        <h1>Login with boostrap</h1>
        <div className="container d-flex align-items-center text-center">
            <div className="form-login">
                {isValid ? <div>Login failed</div> : null}
                <form>
                    <img className="mb-4"
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
                         alt="" width="72" height="57"/>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating">
                        <input className="form-control email" type="email" name="email" placeholder="name@example.com"
                               value={form.email} onChange={handleChangeEmail}/>
                        <label>Email address</label>
                        {submitted && !form.email ? <span>Please enter email.</span> : null}
                    </div>
                    <div className="form-floating">
                        <input className="form-control password" type="password" name="password" placeholder="Password"
                               value={form.password} onChange={handleChangePassword}/>
                        <label>Password</label>
                        {submitted && !form.password ? <span>Please enter password.</span> : null}
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value={form.isRemember} onChange={handleChangeCheckbox}/> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="button" onClick={handleSubmit}>Sign in
                    </button>
                    <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
                </form>
            </div>
        </div>
        </>
    )

}

export default Login;
