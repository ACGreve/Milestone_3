
import React, { useState, useEffect } from "react";
import LoginForm from "./capsules/loginForm";

function Navbar() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
  
    useEffect(() => {
        // Check if user is logged in
        const token = localStorage.getItem('jwt');
        if (token) {
          setLoggedIn(true);
          // Retrieve the username from localStorage or make an API call to get user details
          fetch('/api/getUserInfo', {
            method: 'GET',
            credentials: 'include', // Include credentials for cookies
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.status && data.user) {
                setUsername(data.user); // Set the username in state
              }
            })
            .catch((error) => {
              console.error('Error fetching user info:', error);
            });
        } else {
          setLoggedIn(false);
          setUsername('');
        }
      }, []);
  
    const handleLogout = () => {
      localStorage.removeItem('jwt');
      setLoggedIn(false);
      setUsername('');
    };

  return (
      <nav className="navbar navbar-expand">
        <ul className="navbar-nav mr-auto mt-0">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>{" "}
            <li className="nav-item">
              <a className="nav-link" href="/capsules">
                Your Capsules
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link" href="/capsules/new">
                Add New Capsule
              </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/users/login">
                {loggedIn ? `Welcome, ${username}` : 'Login'}
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/users/signup"onClick={handleLogout}>
                {loggedIn ? 'Logout' : ' Sign Up'}
            </a>
            </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  