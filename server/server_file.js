require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { param } = require("./router/userRouter");
const http = require('http');
const https = require('https');

const app = express();

// Define the target API URL
const targetUrl = 'http://sanjay.squareretail.store';

// Enable CORS for your domain
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://espaceinterior.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Create a route that proxies requests to the target URL
app.get('/proxy/*', (req, res) => {
  const path = req.params[0]; // Capture the path after "/proxy/"

  // Make a request to the external resource
  https.get(targetUrl + path, (externalRes) => {
    // Pipe the external resource's response to the client's response
    externalRes.pipe(res);
  });
});

app.use(express.json());
app.use(cors());
const path = require("path");

const PORT = process.env.PORT || 5002;

const connectToMogodb = async (param) => {
  try {
    await mongoose.connect(
      process.env.DB_URI     
    );
    console.log("DB CONNECTED")
  } catch (err) {
    console.log("DB NOT CONNECTED");
    console.log(err);
  }
};
connectToMogodb();

// Serve PDF files from the "uploads" directory
app.use("/pdf", express.static(path.join(__dirname, "uploads/pdf/")));

app.use("/", require("./router/userRouter"));
app.use("/category", require("./router/category"));
app.use("/subCategory", require("./router/subCategory"))

app.listen(PORT, function () {
  console.log(`server is running on port ${PORT}`);
});
