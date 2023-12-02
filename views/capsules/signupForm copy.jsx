import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
//import { Link, window, useLocation } from "react-router-dom";

//const React = require("react")
const Default = require("../default")


function Signup() {
  const [cookies] = useCookies(["cookie-name"]);
  //const navigate = useNavigate();
  const React = require("react");
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  
  // useEffect(() => {
  //   if (cookies.jwt) {
  //     navigate = "/";
  //   }
  // }, [cookies, navigate]);

    const [values, setValues] = useState({ username: "", password: "" });
    const generateError = (error) =>
      toast.error(error, {
        position: "bottom-right",
      });

    const handleSubmit = async (e) => {
      e.preventDefault()   // Do not refresh the page

      if (password !== confirmPassword) {
        setError("Passwords do not match")
        console.log(Error)   
      } else {
        const result = await fetch('api/signup' {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: username,
            password: password
          })
        }).then((res) => res.json())

        }
        setError("") // Reset error if passwords match
        // Reset the fields after successful submission
        setUsername("")
        setPassword("")
        setConfirmPassword("")
      }
    }

  return (
    <div>
      <Default>
        <main>
          {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
          <form method="POST" onSubmit={handleSubmit} action='/'>
            {/* <form method="POST" action='/users'> */}
            <div className="row">
              <div className="col-sm-6 form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="username"
                  required
                  autoComplete="off"
                    //value={username}
                  onChange={(e) =>
                    //setUsername(e.target.value)}
                    setValues({ ...values, [e.target.username]: e.target.value })
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
                    //setPassword(e.target.value)}
                    setValues({ ...values, [e.target.password]: e.target.value })
                  }
                  className="form-control"
                  id="password"
                  name="password"
                />
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  required
                  //value={confirmPassword}
                  onChange={(e) => 
                    //setConfirmPassword(e.target.value)
                    setValues({ ...values, [e.target.confirmpassword]: e.target.value })
                  }
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                />
              </div>
            </div>
            <input className="btn btn-primary" type="submit" value="Sign Up" />
          </form>
        </main>
      </Default>
    </div>
  )
}

module.exports = Signup
