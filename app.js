const express = require("express");
const app = express();
const cors = require("cors");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");

// middleware
app.use(express.json());
app.use(cors());

// Global route
app.get("/", (req, res) => {
  res.send("Welcome to VillaShop");
});

// routes

app.use("/app/v1/products", productRoute);
app.use("/app/v1/users", userRoute);

module.exports = app;
