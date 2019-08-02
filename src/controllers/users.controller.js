const userCtr1 = {};

userCtr1.getUsers = (req, res) => res.json({ message: " Get notes" });
userCtr1.createUser = (req, res) => res.json({ message: " Notes Saved" });
// userCtr1.getNote = (req, res) => res.json({ message: "Get :ID Notes Routes" });
// userCtr1.updateNote = (req, res) => res.json({ message: "Post :ID Notes " });
userCtr1.deleteUser = (req, res) => res.json({ message: "Nota Eliminada" });

module.exports = userCtr1;
