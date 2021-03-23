const express = require("express");
var cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const studentRoutes = require("./src/routes/student.route");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use("/api/student", studentRoutes);

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log("Express server is running at port " + port);

});