var Utility = require('../utility')
var Input=require('readline-sync');

function vending()
{
console.log(" enter the amount")
amount=Input.questionInt()
Utility.vending(amount) 
}
module.exports= vending()

