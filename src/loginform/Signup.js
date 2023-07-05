import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link, Navigate } from "react-router-dom"


function Signup() {
    const history=useNavigate();
    const [name ,setName] =useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:3000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    Navigate("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("Submitted")
                
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Signup</h1>

            <form className="log" action="POST">
            {/* <input className="lo" type="name" onChange={(e) => { setEmail(e.target.value) }} placeholder="First Name"  /> */}
                 
                <input className="lo" type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input className="lo" type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input className="lo" type="submit" onClick={submit} />

            </form>

            
           <h3><p>OR</p></h3> 
           

            <Link className="sin" to="/login">Login Page</Link>

        </div>
    )
}

export default  Signup