'use strict'

//모듈
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views","./src/views");
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));//URL을 통해 전달되는 데이터에 한글, 공백 포함될 시 인식되지 않는 문제 해결

app.use("/",home); //use -> 미들웨어

module.exports = app;