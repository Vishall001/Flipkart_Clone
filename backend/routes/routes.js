import express from "express";
import { userSignup } from "../controller/use_controller.js";

const routes = express.Router();

routes.post("/signup",userSignup);

export default routes;
