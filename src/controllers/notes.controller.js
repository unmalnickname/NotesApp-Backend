const notesCtr1 = {};

notesCtr1.getNotes = (req, res) => res.json({ message: " Get notes" });
notesCtr1.createNotes = (req, res) => res.json({ message: " Notes Saved" });
notesCtr1.getNote = (req, res) => res.json({ message: "Get :ID Notes Routes" });
notesCtr1.updateNote = (req, res) => res.json({ message: "Post :ID Notes " });
notesCtr1.deleteNote = (req, res) => res.json({ message: "Nota Eliminada" });

module.exports = notesCtr1;
