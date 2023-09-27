const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const errroMiddleware = require("./middlewares/errors");

app.use(express.json());
app.use(cookieParser());

// Import all routes
const products = require("./routes/productRoutes");
const auth = require("./routes/authRoutes");

app.use("/api/v1", products);
app.use("/api/v1", auth);
// Middleware to handle errors
app.use(errroMiddleware);

module.exports = app;
