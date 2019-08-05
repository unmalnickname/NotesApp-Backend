const notesCtr1 = {};

const Note = require("../models/Note");

notesCtr1.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

notesCtr1.createNotes = async (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new Note({
    title: title,
    content: content,
    date: date,
    author: author
  });
  console.log(newNote);
  await newNote.save();
  res.json({ message: "note Saved" });
};
notesCtr1.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  console.log(note);
  res.json(note);
};
notesCtr1.updateNote = async (req, res) => {
  const { title, content, author } = req.body;
  await Note.findOneAndUpdate(
    { _id: req.params.id },
    {
      title: title,
      author: author,
      content: content
    }
  );
  res.json({ message: "Post :ID Notes " });
};

notesCtr1.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Nota Eliminada" });
};

module.exports = notesCtr1;
