import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser"
import Defaultdata from "./default.js";
import routes from "./routes/routes.js";
const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

app.use("/", routes);
const PORT = 8000;
const USER = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USER, PASSWORD);
app.listen(PORT, () => console.log("Server started"));

Defaultdata();
