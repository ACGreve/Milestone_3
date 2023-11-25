const users = require('express').Router()
const User = require("../models/user")
const userSeedData = require("../models/userSeedData.js")

users.get("/data/seed", async (req, res) => {
    await User.insertMany(userSeedData)
    res.redirect('/')
})

//Home Route for login
users.get('/', (req, res) => {
    res.render('loginForm')
})

//Sign Up Form
users.get('/signup', (req, res) => {
    res.render('signupForm')
})

module.exports = users

