const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    fileName: String,
    fileUrl: String,
    newsDate: String
  },
  { timestamps: true } // Add the timestamps option
);

const FileModel = mongoose.model("File", fileSchema);

module.exports = FileModel;
