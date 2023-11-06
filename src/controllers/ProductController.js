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

exports.deleteById = async (req, res) => {
  // Check if product with this id exists?
  const id = req.params.id;
  const result = await productModel.findById(id).exec();
  // If not, return not found
  if (!result) res.status(404).send("Product not found.");
  // Else, delete then return Ok
  await productModel.findByIdAndDelete(id);
  res.status(200).send("Xoa thanh cong");
};
