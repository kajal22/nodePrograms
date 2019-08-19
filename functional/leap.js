
function leap()
{
    var Input=require("readline-sync");
    var Utility = require('./utility')
    
    
    console.log("enter the year");
    var leap = Input.questionInt()

     Utility.YEAR(leap)
    
}
module.exports=leap();