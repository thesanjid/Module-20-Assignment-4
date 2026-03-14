const blogService = require("../services/blog.service");

exports.createBlog = async(req,res,next)=>{
try{
const blog = await blogService.createBlog(req.body,req.user._id);
res.status(201).json(blog);
}catch(error){
next(error);
}
};

exports.getBlogs = async(req,res)=>{
const blogs = await blogService.getBlogs();
res.json(blogs);
};
