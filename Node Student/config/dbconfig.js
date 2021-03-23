const mysql = require('mysql');


const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: "student"
});
dbConn.connect(function (err) {
    if (err) throw err;
    console.log("DB connected successfully");
});

module.exports = dbConn;