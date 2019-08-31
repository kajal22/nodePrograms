function dayofweek()
{
var Input=require('readline-sync');
var Utility = require('../kajal/utility')

console.log("enter the month")
var M=Input.questionInt()

console.log("enter the day")
var D=Input.questionInt()

console.log("enter the year")
var Y=Input.questionInt()
let d=Utility.DayOfWeek(M,D,Y)

if(d == 1)
{
    console.log("Monday");
}
else if(d == 2)
{
    console.log("Tuesday");
}
else if(d == 3)
{
    console.log("Wednesday");
}
else if(d == 4)
{
    console.log("Thursday");
}
else if(d == 5)
{
    console.log("Friday");
}
else if(d == 6)
{
    console.log("Saturday");
}
else if(d == 0)
{
    console.log("Sunday");
}
}
module.exports=dayofweek()