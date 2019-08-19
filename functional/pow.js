
function Power()
{
    var Input=require("readline-sync");
    var Utility = require('../kajal/utility')
    
    
   
    var PowerOfNumber  = parseInt(process.argv[2])
    if(PowerOfNumber<=31)
     Utility.power(PowerOfNumber)
    else
    console.log("overflow")
}
module.exports=Power();