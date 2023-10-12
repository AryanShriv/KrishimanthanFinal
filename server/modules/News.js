const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    description: String,
    category_id: mongoose.Types.ObjectId,
    subcategory_id: mongoose.Types.ObjectId
  },
  { timestamps: true } // Add the timestamps option
);

const News = mongoose.model("News", newsSchema);

module.exports = News;
