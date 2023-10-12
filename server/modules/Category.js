const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  name: String
}, { timestamps: true });

const Model = mongoose.model("Category", newsSchema);

module.exports = Model;
