//const users = require('express').Router()
require('dotenv').config()
const User = require("../models/user")
const jwt = require("jsonwebtoken")

const maxAge = 60 * 60;  // token expires in 1 hour
const createToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET_KEY, {
    expiresIn: maxAge,
  });
};

const handleErrors = (err) => {
    let errors = { name: "", password: "" };
  
    console.log(err);
    if (err.message === "incorrect name") {
      errors.name = "That name is not registered";
    }
  
    if (err.message === "incorrect password") {
      errors.password = "That password is incorrect";
    }
  
    if (err.code === 11000) {
      errors.name = "Name is already registered";
      return errors;
    }
  
    if (err.message.includes("Users validation failed")) {
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
    }
  
    return errors;
  };
  
  module.exports.signup = async (req, res, next) => {
    try {
      const { name, password } = req.body;
      const user = await User.create({ name, password });
      const token = createToken(user._id);
  
      res.cookie("jwt", token, {
        withCredentials: true,
        httpOnly: false,
        maxAge: maxAge * 1000,
      });
  
      res.status(201).json({ user: user._id, created: true });
    } catch (err) {
      console.log(err);
      const errors = handleErrors(err);
      res.json({ errors, created: false });
    }
  };
  
  module.exports.login = async (req, res) => {
    const { name, password } = req.body;
    try {
      const user = await User.login(name, password);
      const token = createToken(user._id);
      res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });
      const data = await response.json();
        localStorage.setItem('jwt', data.token); // Store token in localStorage
        console.log('Login success');
      res.status(200).json({ user: user._id, status: true });
    } catch (err) {
      const errors = handleErrors(err);
      res.json({ errors, status: false });
    }
  };
  