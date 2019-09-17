
/*************************************************************************

* Purpose          : chatApp
* @file            : server.js
* @author          : kajal choudhary
* @version         : 1.0
* @since           : 5-09-2019
* 
**************************************************************************/







const express = require('express');
const app = express();
let validator = require('express-validator')
app.use(validator())
const bodyParser = require('body-parser');
const chatControl = require('../BackEnd/controller/chatController')
const dbconfig = require('../BackEnd/config/database')
let mongoose = require('mongoose');
let routes = require('../BackEnd/routes/userRoutes')
const socketIO = require('socket.io')

// const PORT = 4000;


app.use(express.static('../FrontEnd'));
app.use(bodyParser.json());
app.use('/', routes)
require('dotenv').config()
let PORT = process.env.PORT


//here give database connectivity
mongoose.connect(dbconfig.url, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log("Connection failed  " + err);
    } else {
        console.log(" database successfully connected !!!!");
    }

})



// prints the server run or not
const server = app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});

const io = socketIO(server);



io.on('connection', (socket) => {
    console.log("Socket connected succesfully!! ");


    socket.on('messageStore', (message) => {
        console.log("enterd socket message")

        chatControl.chatAppControl(message, (err, data) => {
            if (err) {
                console.log("err occure")
            }
            else
            {
                console.log("after saving message called to client",data);
                io.emit("messageResponse", data);
            }
           
        })

    })

})