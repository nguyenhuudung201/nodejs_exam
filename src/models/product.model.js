const mongoose = require("mongoose");
const product_schema = new mongoose.Schema({
  // _id
  ProductCode: String,
  ProductName: String,
  ProductDate: String,
  ProductOriginPrice: Number,
  Quantity: Number,
  ProductStoreCode: String,
});
module.exports = mongoose.model("Product", product_schema);
