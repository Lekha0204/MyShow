const express = require("express");
const dotenv = require("dotenv");
const {MongoClient} = require("mongodb");
const path = require("path");

const app = express();
dotenv.config();
MongoClient.connect(process.env.MONGODB_URI)
  .then(() =>{
    console.log("Connected to MongoDB successfully")})
  .catch((err) =>{console.log("Error connecting to MongoDB", err)
  })
const PORT = 3000;

console.log(process.env)

// Serve static files directly from project root
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "assets")));

// Route for home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
