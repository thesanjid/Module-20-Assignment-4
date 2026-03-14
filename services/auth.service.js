const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

exports.registerUser = async(data,res)=>{

const {name,email,password,phoneNumber} = data;

const exists = await User.findOne({email});

if(exists){
throw new Error("User already exists");
}

const hashed = await bcrypt.hash(password,10);

const user = await User.create({
name,
email,
password:hashed,
phoneNumber
});

generateToken(res,user._id);

return user;

};


exports.loginUser = async(data,res)=>{

const {email,password} = data;

const user = await User.findOne({email});

if(!user){
throw new Error("Invalid credentials");
}

const match = await bcrypt.compare(password,user.password);

if(!match){
throw new Error("Invalid credentials");
}

generateToken(res,user._id);

return user;

};
