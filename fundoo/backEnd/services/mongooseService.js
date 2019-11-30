const config = require("../config/config");
let mongoose = require("mongoose");
const logger = require("../logger");
module.exports = {
    mongooseConnection() {

        mongoose.connect( config.MONGODBURL, { useNewUrlParser: true }, (err) => {

            if (err) {

                logger.error("connection failed" + err);
            }
            else {
                logger.info("database connected succesfully!!!!!");
            }
        });
        
        mongoose.connection.on("disconnected",function(){
            console.log("database disconnected");
            process.exit(1);
        });
    }
};