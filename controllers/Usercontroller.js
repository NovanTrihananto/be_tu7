import Note from "../models/Usermodel.js"; // Tetap pakai nama file Usermodel.js

// GET
async function getNote(req, res) {
  try {
    const response = await Note.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

// CREATE
async function createNote(req, res) {
  try {
    const inputResult = req.body;
    await Note.create(inputResult);
    res.status(201).json({ msg: "Note Created" });
  } catch (error) {
    console.log(error.message);
  }
}

export { getNote, createNote };

export const updateNote = async (req, res) => {
  try {
    const inputNote = req.body;

    await Note.update(inputNote, {
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: "Note Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteNote = async (req, res) => {
  try {
    await Note.destroy({
      where: { id: req.params.id },
    });
    res.status(204).json({ msg: "Note deleted successfully" });
  } catch (error) {
    console.log(error.message);
  }
};
