import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import Loginroute from "./routes/Loginroute.js";
import Userroute from "./routes/Userroute.js";

dotenv.config();

const app = express();
app.set("view engine", "ejs");

// Middleware
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: 'https://be202-tu7-700231807331.us-central1.run.app'  // ganti ini dengan domain frontend kamu
}));
app.use(express.json());

// Routes
app.get("/", (req, res) => res.render("index"));
app.use(Loginroute);
app.use(Userroute);

// Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});