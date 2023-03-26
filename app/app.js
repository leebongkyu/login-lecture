
//모듈
const express = require("express");
const app = express();



//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");


app.use("/", home); // user -> 미들웨어 등록

module.exports = app;