const { signup, login } = require("../controllers/authorize");
const { checkUser } = require("./authorize");

const router = require("express").Router();

router.post("/", checkUser); 
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;