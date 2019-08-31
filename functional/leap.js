
function leap()
{
    var Input=require("readline-sync");
    var Utility = require('../utility')
    
    
    console.log("enter the year");
    var leap = Input.questionInt()

     let value=Utility.YEAR(leap)


     console.log(value);
     if(value==true)
    {
    console.log("is leap year");
    }
    else
    {
    console.log("is not leap year");
    }

    
}
module.exports=leap();