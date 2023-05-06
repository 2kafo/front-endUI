import React from 'react'
import './signup.css'

function Signup() {
  return (
    <div className="container">
  <div className="form">
    <h2>Sign up Form</h2>
    <form action method="post">
      <div className="form-group">
        <input type="text"  placeholder="Enter Your Full name" />
      </div>
      <div className="form-group">
        <input type="text"  placeholder="Enter Your Username" />
      </div>
      <div className="form-group">
        <input type="email"  placeholder="Enter Your email" />
      </div>
      <div className="form-group">
        <input type="password"  placeholder="Enter Your Password" />
      </div>
      <div className="form-group">
        <input type="password"  placeholder="Retype Your Password" />
      </div>
      <div className="form-group">
        <button type="submit"><a href style={{textDecoration: 'none'}}>Sign up</a> </button>
      </div>
    </form>
  </div>
</div>

  )
}

export default Signup