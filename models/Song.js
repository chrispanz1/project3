const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Add the bcrypt library

const songSchema = new Schema({
  name: { type: String, required: true },

  genre: { type: String, required: true },
  artist: { type: String, required: true },
});




module.exports = mongoose.model("Song", songSchema);
