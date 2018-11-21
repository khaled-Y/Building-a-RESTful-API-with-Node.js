const express = require("express");
const app = express();
const morgan = require("morgan");

const productsrouts = require("./routes/products");
const ordersrouts = require("./routes/orders");

app.use(morgan("dev"));
app.use("/products",productsrouts.router);
app.use("/orders",ordersrouts.router);


module.exports = app;