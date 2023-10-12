
const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  name: String,
  category_id: mongoose.Types.ObjectId
}, { timestamps: true });

const SubCategory = mongoose.model("SubCategory", newsSchema);

module.exports = SubCategory;
