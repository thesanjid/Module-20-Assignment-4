const authService = require("../services/auth.service");

exports.register = async(req,res,next)=>{
try{
const user = await authService.registerUser(req.body,res);
res.status(201).json(user);
}catch(error){
next(error);
}
};

exports.login = async(req,res,next)=>{
try{
const user = await authService.loginUser(req.body,res);
res.json(user);
}catch(error){
next(error);
}
};

exports.profile = (req,res)=>{
res.json(req.user);
};
