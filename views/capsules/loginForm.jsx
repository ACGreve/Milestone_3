const React = require("react")
const Default = require("../default")
import { useState } from "react"

function login() {
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")

  return (
    <div>
      <Default>
        <main>
          <h1>Login</h1>

          <form onSubmit={""}>
            <div className="row">
              <div className="col-sm-6 form-group">
                <label htmlFor="name">Username</label>
                <input
                  type="name"
                  required
                  // value={username}
                  // onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                  id="name"
                  name="name"
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
            </div>
            <input className="btn btn-primary" type="submit" value="Login" />
          </form>
        </main>
      </Default>
    </div>
  )
}

module.exports = login
