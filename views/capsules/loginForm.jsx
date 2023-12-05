import React, { useState, useEffect } from "react"
// import { useCookies } from "react-cookie"
// import { Link } from "react-router-dom"
// import { Link, useNavigate } from "react-router-dom"
// import { ToastContainer, toast } from "react-toastify"
// const React = require("react")
const Default = require("../default")

function loginForm() {
  return (
    <div>
      <Default>
        <body className="login">
        <main>
          <h1>Login</h1>
          <form method="POST">
            <div className="row">
              <div className="col-sm-6 form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="username"
                  required
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
                  className="form-control"
                  id="password"
                  name="password"
                />
              </div>
            </div>
            <p>
              Don't have an account? Sign up <a href="/users/signup">here</a>
            </p>
            <input className="btn btn-primary" type="submit" value="Login" />
          </form>
        </main>
        </body>
      </Default>
    </div>
  )
}

module.exports = loginForm

