const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  id: Number,
  title: String,
  tech: String,
  description: String,
});

module.exports = mongoose.model("Project", projectSchema);
