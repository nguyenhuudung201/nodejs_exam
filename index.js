const express = require("express");
const app = express(); // host - app
const port = 8080;

app.listen(port, function () {
  console.log("Server is running...");
});
app.set("view engine", "ejs");  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./src/db/connect");
const product_route = require("./src/routes/product.route");
app.use("/", product_route);
