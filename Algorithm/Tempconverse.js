function TempConversion()
{
var Input=require('readline-sync');
var Utility = require('../kajal/utility')

console.log("enter temperature")
var temperature=Input.questionInt()


Utility.celsiusConversion(temperature)
Utility.fahrenheitConversion(temperature)
}
module.exports=TempConversion()