import React, { useState, useEffect } from "react"
import { useCookies } from "react-cookie"
import { Link } from "react-router-dom"
//import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"

//const React = require("react")
const Default = require("../default")

function login() {
//module.exports.login = async (req, res) => {
  const [cookies] = useCookies([])
  //const navigate = useNavigate();
  //const history = useHistory();
  useEffect(() => {
    if (cookies.jwt) {
      //history.push("/");
      window.location.href = "/";
    } 
  }, );   //[cookies, history]);

  const [values, setValues] = useState({ name: "", password: "" });
  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5001/capsules/loginForm",
        {
          ...values,
        },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          const { username, password } = data.errors;
          if (name) generateError(name);
          else if (password) generateError(password);
        } else {
          window.location.href = "/";
        }
      }
    } catch (ex) {
      console.log(ex);
    }
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
                  // value={username}
                  // onChange={(e) => setUsername(e.target.value)}
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
                  //onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  id="password"
                  name="password"
                />
              </div>
            </div>
            <input className="btn btn-primary" type="submit" value="Login" />
            <span>
              Don't have an account ?<Link to="capsules/signup"> Signup </Link>
            </span>
          </form>
          <ToastContainer />
        </main>
      </Default>
    </div>
  )
}

module.exports = login
