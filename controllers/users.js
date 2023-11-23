const router = require('express').Router()
const User = require("../models/user")
const userSeedData = require("../models/userSeedData.js")

router.get("/data/seed", async (req, res) => {
    await User.insertMany(userSeedData)
    res.redirect('/')
})

router.post('/', async (req, res) => {
    const user = await User.create(req.body)
    res.json(user)
})

router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

router.get('/login', (req, res) => {
    res.render("login")
})

module.exports = router