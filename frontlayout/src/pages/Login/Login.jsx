import React from 'react';
import './login.css'
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
    <div className="form">
        <h2>Welcome to do list</h2>
        <form action method="post">
            <div className="form-group">
                <input type="text"  placeholder="Enter Your Username" />
            </div>
            <div className="form-group">
                <input type="text"  placeholder="Enter Your Password" />
            </div>
            <div className="form-group">
                <button type="submit"><Link to ="/dashboard">Log in</Link> </button>
            </div>
        </form>
    </div>
</div>

  )
}

export default Login