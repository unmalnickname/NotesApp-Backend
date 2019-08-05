const userCtr1 = {};
const User = require("../models/user.js");

userCtr1.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
userCtr1.createUser = async (req, res) => {
  const { username } = req.body;
  const newUser = new User({ username });
  await newUser.save();
  res.json("User Created");
};
userCtr1.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "Usuario Eliminado" });
};

module.exports = userCtr1;
