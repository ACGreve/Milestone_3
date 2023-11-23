const users = require('express').Router()
const User = require('../models/user')
const userSeedData = require('../models/userSeedData')

//Home Route for login
users.get('/', (req, res) => {
    res.render('loginForm')
})

//Sign Up Form
users.get('/signup', (req, res) => {
    res.render('signupForm')
})

module.exports = users