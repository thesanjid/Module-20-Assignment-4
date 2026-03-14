const Blog = require("../models/blog.model");

exports.createBlog = async(data,userId)=>{

return await Blog.create({
...data,
user:userId
});

};

exports.getBlogs = async()=>{
return await Blog.find().populate("user","name email");
};
