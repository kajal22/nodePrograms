const mongoose = require("mongoose");

let labelSchema = mongoose.Schema({
    labelName: {
        type: String,
        require: [true, "firstName should be string"]
    },
    userId:{
        type:String,
        require: [true, "firstName should be string"]
    },
},
{
        timestamps: true  
});
class createModel{

}
let modelObject=new createModel();
module.exports =modelObject;