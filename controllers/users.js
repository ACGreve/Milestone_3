const users = require('express').Router()
const User = require("../models/user")
const userSeedData = require("../models/userSeedData")
const { signup, login } = require("../controllers/authorize");
const { checkUser } = require("../middlewares/authorize");

users.get("/data/seed", async (req, res) => {
    await User.insertMany(userSeedData)
    res.redirect('/')
})

//Home Route for login
users.get('/', (req, res) => {
    checkUser()
    res.render('capsules/loginForm')
})

users.post('/loginForm', async (req, res) =>{
    const { username, password } = req.body
    const user = await User.findOne({username})
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
    res.render('capsules/signupForm')
})

users.post('/', async(req,res)=>{
    try{
        const createUser = await User.create(req.body)
        if(!createUser){
            res.render("error404")
        }
        res.redirect('capsules/loginForm')
    }catch(error){
      console.log(error)
    }
})

module.exports = users

