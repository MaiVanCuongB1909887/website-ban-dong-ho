const express = require("express");
const app = express();
const errroMiddleware = require("./middlewares/errors");

app.use(express.json());

// Import all routes
const products = require("./routes/productRoutes");

app.use("/api/v1", products);
// Middleware to handle errors
app.use(errroMiddleware);

module.exports = app;
