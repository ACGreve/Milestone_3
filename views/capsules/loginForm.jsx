import React, { useState, useEffect } from "react"
//import { Routes, Route, BrowserRouter } from "react-router-dom"
// import { useCookies } from "react-cookie"
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"


//const React = require("react")
const Default = require("../default")



function login() {
//module.exports.login = async (req, res) => {
  const [cookies] = useCookies([])
  const location = useNavigate();
  //const navigate = useNavigate();
  //const history = useHistory();
  // useEffect(() => {
  //   if (cookies.jwt) {
  //     //history.push("/");
  //     window.location.href = "/";
  //   } 
  // }, [cookies, window.location.href = ""]);

  const [values, setValues] = useState({ username: "", password: "" });
  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5001/users/login",
        {
          ...values,
        },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          const { username, password } = data.errors;
          if (username) generateError(username);
          else if (password) generateError(password);
        } else {
          window.location.href = "/";
        }
      }
    } catch (ex) {
      console.log(ex);
    // }
  };  
  return (
    <div>
      <Default>
        <main>
          <h1>Login</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="row">
              <div className="col-sm-6 form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="username"
                  required
                  //value={username}
                  onChange={(e) => 
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
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
                  //value={password}
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                  className="form-control"
                  id="password"
                  name="password"
                />
              </div>
            </div>
            <input className="btn btn-primary" type="submit" value="Login" />
            <span>
              <h3>Don't have an account ?<Link to="users/signup"> Signup </Link></h3>
            </span>
          </form>
          <ToastContainer />
        </main>
      </Default>
    </div>
  )
}

module.exports = login
