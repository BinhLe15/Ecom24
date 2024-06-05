import React from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignIn() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    axios.defaults.withCredentials = true

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/login', {email, password})
        .then(result => {console.log(result)
            if (result.data.status === "Success") {
                localStorage.setItem("email", email);
                localStorage.setItem("role", result.data.role)
                navigate('/')
            }
    })
    .catch(err => console.log("Register failed: "+ err))
        
    }

    return (
        <div className="sign-in">
            <form onSubmit={handleSubmit} className="sign-in_container col-4">
                <div className="title">Sign in ECOM24</div>
                <div className="text">Email</div>
                <input type="text"  onChange={(e) => setEmail(e.target.value)}></input>
                <div className="text">Password</div>
                <input type="password"  onChange={(e) => setPassword(e.target.value)}></input>
                <button
                    className="btn-login"
                >Sign In</button>
                <div className="back" >Go back</div>
            </form>
        </div>
    )
}