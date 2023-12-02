
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true
  },
  password:{
      type:String,
      required:true
  }
});

userSchema.pre("save", async function(next) {
  try {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    console.log('password hashed')
    next()
  } catch (error) {
    next(error)
  }
});

userSchema.statics.login = async function (username, password) {
  const user = await this.findOne({ username });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      console.log('logged in')
      return user
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect username");
};

  module.exports = mongoose.model("Users", userSchema);