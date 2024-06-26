const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser')

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Birds home page");
});

// Như chính sách bảo mật của trình duyệt web khi ta truy cập các domain khác nhau
app.use(cors());
// Để lấy được req.body thì dùng
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());

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
