import React, { useState, useEffect } from "react"
import { useCookies } from "react-cookie"
// import { Link } from "react-router-dom"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
// const React = require("react")
const Default = require("../default")

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Login successful
        const data = await response.json();
        localStorage.setItem('jwt', data.token); // Store token in localStorage
        // Redirect or update UI accordingly
      } else {
        // Handle login failure
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Default>
        <main>
          <h1>Login</h1>
          {/*<form method="POST">*/}
          <form onSubmit={(e) => handleSubmit(e)}> 
            <div className="row">
              <div className="col-sm-6 form-group">
                <label htmlFor="username">Username</label>
                <input
                  required
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                  id="username"
                  name="username"
                />
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  id="password"
                  name="password"
                />
              </div>
            </div>
            <input className="btn btn-primary" type="submit" value="Login" />
            {/* <span>
              Don't have an account ?<Link to="capsules/signup"> Signup </Link>
            </span> */}
          </form>
          {/* <ToastContainer /> */}
        </main>
      </Default>
    </div>
  )
}

export default LoginForm;

