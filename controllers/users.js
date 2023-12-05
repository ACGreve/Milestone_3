const users = require('express').Router()
const User = require("../models/user")
const userSeedData = require("../models/userSeedData")
const { signup, login } = require("../controllers/authorize");
const { checkUser } = require("../middlewares/authorize");
const bcrypt = require("bcrypt")



users.get("/data/seed", async (req, res) => {
    try{
        await User.insertMany(userSeedData)
        res.redirect('/')
    }catch(error){
        res.render("Error404")
    }
})

//Home Route for login
users.get('/login', (req, res) => {
    try{
        res.render("capsules/loginForm")
    }catch(error){
        res.render("Error404")
    }
})

users.post('/login', async (req, res) =>{
    try{
        const { username, password } = req.body
        const user = await User.findOne({ username })
        if(!user){
            console.log('user not found')
        }
        if(await bcrypt.compare(password, user.password)){
            console.log('success')
            res.redirect('/capsules')
        }else{
            console.log('invalid password')
    }}catch{
        res.render("Error404")
    }
})

//Sign Up Form
users.get('/signup', (req, res) => {
    try{
        res.render("capsules/signupForm")
    }catch(error){
        res.render("Error404")
    }
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
      res.render("Error404")
    }
})

module.exports = users

