import React from 'react';
import './login.css';

function Login() {
  return (
    <>
    <div className="container">
      <div className="form">
        <h2>Welcome to our Platform</h2>
        <form action="" method="post">

          <div className="form-group">
            <input type="text" value="" placeholder="Enter Your Username">
          </div>
          <div className="form-group">
            <input type="text" value="" placeholder="Enter Your Password">
          </div>
          <div className="form-group">
            <button type="submit"><a href="dashboard.html" style="text-decoration: none;">Login</a> </button>
            <span><h6>Create  Account
            </h6><a href="signup.html">Sign up</a></span>
            <p><a href="#">Forgot Password</a></p>
          </div>
        </form>
      </div>

    </div>
    </>
  )
}

export default Login