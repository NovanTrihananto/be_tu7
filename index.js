import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import Loginroute from "./routes/Loginroute.js";
import Userroute from "./routes/Userroute.js";


const app = express();
app.set("view engine", "ejs");

dotenv.config();

app.use(cookieParser());
app.use(cors({ credentials:true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.get("/", (req, res) => res.render("index"));
app.use(Loginroute); // <- ini penting
app.use(Userroute);  // <- pastikan huruf kecil sesuai import

app.listen(5000, () => console.log("Server connected"));