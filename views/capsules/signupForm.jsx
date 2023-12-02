import React, { useState, useEffect } from "react";
// import { useCookies } from "react-cookie";

const Default = require("../default")


function Signup() {
  console.log("2. Signup function begins");
  // const [cookies] = useCookies(["cookie-name"]);
  // //const navigate = useNavigate();
  // const React = require("react");

  // const [values, setValues] = useState({ username: "", password: "" });
  const generateError = (error) => {
    toast.error(error, {
      position: "bottom-right",
    })
  };

  console.log("3. handlesubmit function about to begin");

  const handleSubmit = async (e) => {
    
    e.preventDefault(); // Do not refresh the page
    console.log("4. PreventDefaullt");   

    if (password !== confirmPassword) {
      setError("5.1 Passwords do not match");
      console.log(Error);
    } else {
      try {
        console.log("5.2 Passwords match")
        const response = await fetch("api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: values.username,
            password: values.password,
          }),
        });

        if (response.ok) {
          setError(""); // Reset error if passwords match
          // Reset the fields after successful submission
          setValues({ username: "", password: "" });
        } else {
          const errorData = await response.json();
          setError(errorData.message);
        }
      } catch (error) {
        console.log(error);
        setError("An error occurred. Please try again.");
      }
    }
  };
    
  return (
    <div>
      <Default title="New Account Sign-up">
        <body className="signup">
          <main>
          <h1>Signup for a new Login Account</h1>
            {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
            <form method="POST" onSubmit={handleSubmit} action="/" >
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
                <div className="pwdfields">
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
              </div>
              <input className="btn btn-primary" type="submit" value="Sign Up" />
            </form>
          </main>
        </body>
      </Default>
    </div>
  )
}

module.exports = Signup
