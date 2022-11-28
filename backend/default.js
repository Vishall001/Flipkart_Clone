import { products } from "./constants/data.js";
import Product from "./model/product.schema.js";

const Defaultdata = async() => {
  try {
    await Product.insertMany(products)
    console.log("Data imported successfully")
  } catch (err) {
    console.log(err);
  }
};


export default Defaultdata
