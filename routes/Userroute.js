import express from "express";
import { getNote, createNote, updateNote, deleteNote } from "../controllers/Usercontroller.js";

const router = express.Router();

router.get("/note", getNote);
router.post("/note", createNote);
router.put("/note/:id", updateNote);
router.delete("/note/:id", deleteNote);

export default router;
