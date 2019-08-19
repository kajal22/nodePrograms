function Binaryswap()
{
   
var Input=require('readline-sync');
var Utility = require('../kajal/utility')
console.log("enter an Integer")
var number=Input.question()

var BinaryValue=Utility.binary(number)
console.log(BinaryValue)
var binaryswap=Utility.binaryswap(BinaryValue)
console.log(binaryswap)
var decimalvalue=Utility.Binaryswap(binaryswap)
console.log(decimalvalue)
var poweroftwo=Utility.Binarypower(decimalvalue)
console.log(poweroftwo)
}

module.exports=Binaryswap()