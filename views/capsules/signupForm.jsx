const React = require("react")
const Default = require("../default")
import { useState } from "react"

function Signup() {
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  // const [confirmPassword, setConfirmPassword] = useState("")
  // const [error, setError] = useState("")

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   if (password !== confirmPassword) {
  //     setError("Passwords do not match")
  //   } else {
  //     setError("") // Reset error if passwords match
  //     // Reset the fields after successful submission
  //     setUsername("")
  //     setPassword("")
  //     setConfirmPassword("")
  //   }
  // }

  return (
    <div>
      <Default>
        <main>
          {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
          {/* <form onSubmit={handleSubmit}> */}
          <form method="POST" action='/users'>
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
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  id="password"
                  name="password"
                />
              </div>
              {/* <div className="col-sm-6 form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  // required
                  // value={confirmPassword}
                  // onChange={(e) => setConfirmPassword(e.target.value)}
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                />
              </div> */}
            </div>
            <input className="btn btn-primary" type="submit" value="Sign Up" />
          </form>
        </main>
      </Default>
    </div>
  )
}

module.exports = Signup
