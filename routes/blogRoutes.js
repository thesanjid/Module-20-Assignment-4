const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blog.controller");
const protect = require("../middlewares/auth.middleware");

router.post("/",protect,blogController.createBlog);
router.get("/",protect,blogController.getBlogs);

module.exports = router;
