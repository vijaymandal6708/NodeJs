const ProductModel = require("../models/ProductModel")

const productDisplay = async (req,res) => {
  const productdisplay = await ProductModel.find({});
  res.send(productdisplay); 
}

module.exports = {
    productDisplay,
}