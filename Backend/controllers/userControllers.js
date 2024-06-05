const userModel = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const generateToken = require("../controllers/generateToken");
const bc = require('bcryptjs')

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  if (!name || !email || !password) {
    res.status(200);
    throw new Error("Please enter all the fields");
  }

  const userExists = await userModel.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const salt = await bc.genSalt(10)
  const hashedPassword = await bc.hash(password,salt);

  const user = await userModel.create({
    name,
    email,
    password:hashedPassword,
    pic,
  });

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create new user");
  }
});

const matchPassword = async(enteredPassword,password)=>{
  return await bc.compare(enteredPassword,password)
}

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please enter all the required credentials");
  }
  const user = await userModel.findOne({email})
  if(user && matchPassword(password,user.password)){
    res.json({
      _id:user._id,
      name:user.name,
      email:user.email,
      pic:user.pic,
      token:generateToken(user._id)
    })
  }
  else{
    res.status(401)
    throw new Error("Invalid credentials")
  }
});

module.exports = { registerUser, authUser };
