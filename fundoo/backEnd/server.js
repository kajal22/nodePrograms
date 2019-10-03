
/*************************************************************************

* Purpose          : fundoo
* @file            : server.js
* @author          : kajal choudhary
* @version         : 1.0
* @since           : 25-09-2019
* 
**************************************************************************/

const express = require("express");
const app = express();
const redis = require("redis");

const control = require("../backEnd/controller/userControl");
const routes = require("../backEnd/routes/userRoutes");
const config = require("../backEnd/config/config");
let validator = require("express-validator");
app.use(validator());
let mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use("/", routes);
require("dotenv").config();

const client = new redis.createClient();

client.on("connect", function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("redis connected");
    }
});

mongoose.connect(config.MONGODBURL, { useNewUrlParser: true }, (err) => {

    if (err) {
        console.log("connection failed" + err);
    }
    else {
        console.log("database connected succesfully!!!!");
    }
});


/**
@description- prints the server run or not
**/

app.listen(config.PORT, function () {
    console.log("Server is running on Port: " + config.PORT);
});


module.exports = app;