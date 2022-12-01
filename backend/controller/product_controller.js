import Product from "../model/product.schema.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: message.err });
  }
};

export const getProductsById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ "id": id });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: message.err });
  }
};
