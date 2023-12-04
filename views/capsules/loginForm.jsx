import React, { useState, useEffect } from "react"
// import { useCookies } from "react-cookie"
// import { Link } from "react-router-dom"
// import { Link, useNavigate } from "react-router-dom"
// import { ToastContainer, toast } from "react-toastify"
// const React = require("react")
const Default = require("../default")

function loginForm() {

  // const [cookies] = useCookies([]);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (cookies.jwt) {
  //     navigate("/");
  //   }
  // }, [cookies, navigate]);

  const [values, setValues] = useState({ name: "", password: "" })
  // const generateError = (error) =>
  //   toast.error(error, {
  //     position: "bottom-right",
  //   });
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
    }
  }
  return (
    <div>
      <Default>
        <main>
          <h1>Login</h1>
          <form method="POST">
          {/* <form onSubmit={(e) => handleSubmit(e)}> */}
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
            <p>
              Don't have an account? Sign up <a href="/users/signup">here</a>
            </p>
            <input className="btn btn-primary" type="submit" value="Login" />
          </form>
          {/* <ToastContainer /> */}
        </main>
      </Default>
    </div>
  )
}

module.exports = loginForm

// /*import React, { useState, useEffect } from "react"
// import { useCookies } from "react-cookie"
// // import { Link } from "react-router-dom"
// import { Link, useNavigate } from "react-router-dom"
// import { ToastContainer, toast } from "react-toastify"
// // const React = require("react")
// const Default = require("../default")

// function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         // Login successful
//         const data = await response.json();
//         localStorage.setItem('jwt', data.token); // Store token in localStorage
//         // Redirect or update UI accordingly
//       } else {
//         // Handle login failure
//         console.log('Login failed');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <Default>
//         <main>
//           <h1>Login</h1>
//           {/*<form method="POST">}
//           <form onSubmit={(e) => handleSubmit(e)}> 
//             <div className="row">
//               <div className="col-sm-6 form-group">
//                 <label htmlFor="username">Username</label>
//                 <input
//                   required
//                   type="text"
//                   placeholder="Username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   className="form-control"
//                   id="username"
//                   name="username"
//                 />
//               </div>
//               <div className="col-sm-6 form-group">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   required
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="form-control"
//                   id="password"
//                   name="password"
//                 />
//               </div>
//             </div>
//             <input className="btn btn-primary" type="submit" value="Login" />
//             {/* <span>
//               Don't have an account ?<Link to="capsules/signup"> Signup </Link>
//             </span> }
//           </form>
//           {/* <ToastContainer /> }
//         </main>
//       </Default>
//     </div>
//   )
// }

// export default LoginForm; */

