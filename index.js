const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require('cookie-parser')
const initDatabase = require("./db/index");
const router = require("./router");
require("dotenv").config();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(helmet());
app.use(cookieParser())
app.use(router);
app.enable("trust proxy");

initDatabase();

app.listen(4000, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("server is up and running");
  }
});
