function monthlypayment()
{
var Input=require('readline-sync');
var Utility = require('../kajal/utility')
console.log("enter year ,amount and interest")
var year=Input.questionInt()
var amount=Input.questionInt()
var interest=Input.questionInt()

var n=12*year
var r=interest/(12*100)
Utility.Payment(n,r,amount)
}
module.exports=monthlypayment()