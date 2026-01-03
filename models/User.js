const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    mobile: {
      type: String,
      required: true,
      match: [/^[0-9]{10}$/, "Mobile number must be 10 digits"]
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/@gmail\.com$/, "Only Gmail addresses are allowed"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
