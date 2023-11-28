const users = require('express').Router()
const User = require("../models/user")
const userSeedData = require("../models/userSeedData.js")

users.get("/data/seed", async (req, res) => {
    await User.insertMany(userSeedData)
    res.redirect('/')
})

//Home Route for login
users.get('/', (req, res) => {
    res.render("capsules/loginForm")
})

//Sign Up Form
users.get('/signup', (req, res) => {
    res.render("capsules/signupForm")
})

users.post('/signup', async(req,res)=>{
    try{
        const createUser = await User.create(req.body)
        if(!createUser){
            res.render("error404")
        }
        res.redirect("login")
    }catch(error){
      console.log(error)
    }
})

module.exports = users

