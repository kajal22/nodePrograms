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
Utility.DayOfWeek(M,D,Y)
}
module.exports=dayofweek()