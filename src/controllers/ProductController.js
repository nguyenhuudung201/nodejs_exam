const productModel = require("./../models/product.model");
exports.home = function (req, res) {
  res.render("home/home");
};
exports.add = async function (req, res) {
  console.log("hello dung");
  const data = req.body;

  try {
    const p = new productModel(data);

    await p.save();

    res.send("Done");
  } catch (error) {
    res.send(error);
  }
};
exports.getAll = async function (req, res) {
  const products = await productModel.find();
  res.json(products);
};
