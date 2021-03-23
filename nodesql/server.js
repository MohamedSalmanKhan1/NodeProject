const mysql = require("mysql");
const express = require("express");
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }))

var mysqlConnection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "nodesql",
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err) {
        console.log("connected");
    }
    else {
        console.log("connection failed");
    }
})

app.listen(3000);
