function vending()
{
var Input=require('readline-sync');
var Utility = require('../kajal/utility')
console.log(" enter the amount")
amount=Input.questionInt()
Utility.vending(amount) 
}
module.exports= vending()

