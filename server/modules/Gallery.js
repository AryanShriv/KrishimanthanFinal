const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    image5: String,
    image1Text: String,
    image2Text: String,
    image3Text: String,
    image4Text: String,
    image5Text: String,
  },
  { timestamps: true } // Add the timestamps option
);

const Gallery = mongoose.model("Gallery", gallerySchema);

module.exports = Gallery;
