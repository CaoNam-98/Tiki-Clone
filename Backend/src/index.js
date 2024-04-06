const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser")
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Birds home page");
});

// Để lấy được req.body thì dùng
app.use(bodyParser.urlencoded({ extended: false }))

routes(app);

// Dùng promise để bắt error khi connect không success
mongoose
  .connect(
    `${process.env.MONGO_BD}`
  )
  .then(() => {
    console.log("Connect BD success");
  })
  .catch((err) => {
    console.log("err: ", err);
  });

app.listen(port, () => {
  console.log("Server running" + port);
});
