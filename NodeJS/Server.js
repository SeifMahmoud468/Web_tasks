const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

const port = 8000;
const server = app.listen(port, function () {
    console.log("Server");
});