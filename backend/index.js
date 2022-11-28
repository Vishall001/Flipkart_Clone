import express from "express";
import Connection from "./database/db.js";
import dotenv from 'dotenv';
const app = express();

dotenv.config();
const PORT = 8000;
const USER = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USER, PASSWORD);
app.listen(PORT, () => console.log("Server started"));
