const users = require('express').Router()
const User = require("../models/user")
const userSeedData = require("../models/userSeedData.js")

users.get("/data/seed", async (req, res) => {
    await User.insertMany(userSeedData)
    res.redirect('/')
})

//Home Route for login
users.get('/login', (req, res) => {
    res.render("capsules/loginForm")
})

users.post('/login', async (req, res) =>{
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if(!user){
        console.log('user not found')
    }
    if(password === user.password){
        console.log('success')
    }else{
        console.log('invalid password')
    }
})

//Sign Up Form
users.get('/signup', (req, res) => {
    res.render("capsules/signupForm")
})

users.post('/', async(req,res)=>{
    try{
        const createUser = await User.create(req.body)
        if(!createUser){
            res.render("error404")
        }
        res.redirect("/users/login")
    }catch(error){
      console.log(error)
    }
})

module.exports = users

