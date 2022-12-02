import express from "express";
import addPaymentGateway from "../controller/payment_controller.js";
import { getProducts,getProductsById } from "../controller/product_controller.js";
import { userSignup, userLogin } from "../controller/user_controller.js";

const routes = express.Router();

routes.post("/signup", userSignup);
routes.post("/login", userLogin);
routes.get("/products", getProducts);
routes.get("/product/:id", getProductsById);
routes.post("/payment", addPaymentGateway);

export default routes;
