require("dotenv").config({_path:"../.env"});
module.exports={
    PORT:process.env.PORT,
    MONGODBURL:process.env.MONGODBURL,
    service:process.env.service,
    user:process.env.user,
    pass:process.env.pass,   
};