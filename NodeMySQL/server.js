const mysql=require("mysql");
const express=require("express");
const ebodyParser=require("body-parser");
const bodyParser = require("body-parser");

var app=express();

app.use(bodyParser.json());