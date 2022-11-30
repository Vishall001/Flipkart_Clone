import express from "express";
import { userSignup,userLogin } from "../controller/use_controller.js";

const routes = express.Router();

routes.post("/signup",userSignup);
routes.post("/login",userLogin)
export default routes;
