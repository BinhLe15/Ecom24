import React, { useState } from "react";
import "./SignUp.css";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/register', {name, email, password})
        .then(result => {console.log(result)
        navigate('/sign-in')
        alert("Your account has been created")
    })
    .catch(err => console.log("Register failed: "+ err))
        
    }

    return (
        <div className="sign-in">
            <form onSubmit={handleSubmit} className="sign-in_container col-4">
                <div className="title">Sign up ECOM24</div>
                <div className="text">Username</div>
                <input type="text" onChange={(e) => setName(e.target.value)}></input>
                <div className="text">Email</div>
                <input type="text"  onChange={(e) => setEmail(e.target.value)}></input>
                <div className="text">Password</div>
                <input type="password"  onChange={(e) => setPassword(e.target.value)}></input>
                <div className="text">Confirm Password</div>
                <input type="password"  ></input>
                <button
                    className="btn-login"
                >SignUp</button>
                <div className="back" >Go back</div>
            </form>
        </div>
    )
}