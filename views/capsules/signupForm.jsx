const React = require("react")
const Default = require("../default")
import { useState } from "react"

function Signup() {

  return (
    <div>
      <Default>
        <body className="signup">
        <main>
          <h1>Sign Up</h1>
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
        </body>
      </Default>
    </div>
  )
}

module.exports = Signup
