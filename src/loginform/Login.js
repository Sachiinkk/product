import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './login.css'

function Login() {

    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:8000/", {
                email, password
            })
                .then(res => {
                    if (res.data == "exist") {
                        history("/home", { state: { id: email } })
                    }
                    else if (res.data == "notexist") {
                        alert("User have not sign up")
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }

    }


    return (<>
        <div className="login">

            <h1>Login</h1>

            <form className="log" action="POST">
                <input className="lo" type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                <input className="lo" type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input className="lo" type="submit" onClick={submit} />

            </form>
            
            <h3> <p>OR</p></h3>
            

            <Link className="sin" to="/signup">Signup Page</Link>

        </div>
    </>
    )
}

export default Login