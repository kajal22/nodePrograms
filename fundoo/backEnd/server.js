
/*************************************************************************

* Purpose          : fundoo
* @file            : server.js
* @author          : kajal choudhary
* @version         : 1.0
* @since           : 25-09-2019
* 
**************************************************************************/

const express = require('express')
const app = express()
const control = require('../backEnd/controller/userControl')
const routes = require("../backEnd/routes/userRoutes")
let validator = require('express-validator')
app.use(validator())  
let mongoose = require('mongoose');
const bodyParser = require('body-parser')
const PORT = 4000;
app.use(express.static('../frontEnd'));
app.use(bodyParser.json());
app.use('/', routes)
require('dotenv').config()
// mongoose.connect('mongodb://127.0.0.1:27017/Fundoo', { useNewUrlParser: true }, (err) => {
    mongoose.connect(process.env.MONGODBURL, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log("connection failed" + err)
    }
    else {
        console.log("database connected succesfully!!!!")
    }
})
// prints the server run or not
const server = app.listen(process.env.PORT, function () {
    console.log("Server is running on Port: " +process.env.PORT);
});