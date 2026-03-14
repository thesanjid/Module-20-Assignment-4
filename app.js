const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const blogRoutes = require("./routes/blog.routes");

const errorHandler = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth",authRoutes);
app.use("/api/blogs",blogRoutes);

app.use(errorHandler);

module.exports = app;
