import React, { useState, useEffect, Component } from 'react';
import './login.css'
import { Link, redirect } from "react-router-dom";
import axios from 'axios';



class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e =>{
        e.preventDefault();
        console.log(this.state);
        try {
            axios.post('https://fine-jade-rhinoceros-sock.cyclic.app/user-login', this.state)
            .then(Response => {
                console.log(Response)
            })
        } catch (error) {
            console.log('err',error)
            
        }
    }
    render() {
        const {email, password} = this.state;
        return (
            <div className="container">
                <div className="form">
                    <h2>Welcome to do list</h2>
                    <form onSubmit={this.submitHandler}>
                        <div className="form-group">
                            <input type="email"
                                name="email"
                                value={email}
                                id="email"
                                placeholder="Enter Your Username"
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className="form-group">
                            <input type="password"
                                name="password"
                                value={password}
                                id="password"
                                placeholder="Enter Your Password"
                                onChange={this.changeHandler} />
                        </div>
                        <div className="form-group">
                            <button type="submit">Log in </button>
                            <Link to="/signup">Sign Up</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login