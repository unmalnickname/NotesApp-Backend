const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      trim: true
    }
  },
  { timestamps: true }
);

module.exports = model("user", userSchema);
