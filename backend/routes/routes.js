import express from "express";
import { getProducts,getProductsById } from "../controller/product_controller.js";
import { userSignup, userLogin } from "../controller/user_controller.js";

const routes = express.Router();

routes.post("/signup", userSignup);
routes.post("/login", userLogin);
routes.get("/products", getProducts);
routes.get("/product/:id", getProductsById);

export default routes;
