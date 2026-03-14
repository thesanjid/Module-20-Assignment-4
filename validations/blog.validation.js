const Joi = require("joi");

exports.createBlogSchema = Joi.object({

title:Joi.string().required(),

content:Joi.string().required(),

authorName:Joi.string().required(),

tags:Joi.array().items(Joi.string()),

blogImage:Joi.string()

});
