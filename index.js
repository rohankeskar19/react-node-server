const express = require("express");
const path = require("path");

const app = express();

require("dotenv").config();

const buildPath = process.env.BUILD_PATH;

app.use(express.static(buildPath));
app.use((req, res, next) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

const PORT = process.env.PORT | 5000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
