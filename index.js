const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
