function Binary()
{
   
var Input=require('readline-sync');
var Utility = require('../kajal/utility')
console.log("enter an Integer")
var number=Input.question()

var binary=Utility.binary(number)
console.log(binary)
}
module.exports=Binary()