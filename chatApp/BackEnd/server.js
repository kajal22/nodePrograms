
/*************************************************************************

* Purpose          : chatApp
* @file            : 
* @author          : kajal
* @version         : 1.0
* @since           : 5-09-2019
* 
**************************************************************************/







const express = require('express');
const app = express();
let validator=require('express-validator')
app.use(validator())  
const bodyParser = require('body-parser');

// const dbconfig=require('../BackEnd/config/database')
let mongoose = require('mongoose');
let routes=require('../BackEnd/routes/routes')

//port number
const PORT = 4001;

app.use(bodyParser.json());   
               
app.use('/chatApp',routes)

//here give database connectivity
mongoose.connect('mongodb://127.0.0.1:27017/chatApp', { useNewUrlParser: true },(err)=>{
    if(err)
    {
        console.log("not connected");
        
    }else{
        console.log("connected");
        
    }
});


 // prints the server run or not
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

