function Newton()
{
   
var Input=require('readline-sync');
var Utility = require('../kajal/utility')
console.log("enter an Integer")
var t=Input.question()
var c=t
epsilon=1e-15
Utility.Sqrt(epsilon,c,t)
}
module.exports=Newton()