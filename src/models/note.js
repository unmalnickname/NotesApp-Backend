const { Schema, model } = require("mongoose");

const noteScheme = new Schema(
  {
    title: String,
    content: {
      type: String,
      require: true
    },
    author: String
  },
  {
    timestamps: true
  }
);

module.exports = model("note", noteSchema);
