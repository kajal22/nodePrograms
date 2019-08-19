function Distance()
{
    
var x,y
var user=require('readline-sync');
var Utility = require('../utility')
console.log("enter the value x and y")
x=user.questionInt()
y=user.questionInt()
distances=Utility.Distances(x,y)
console.log(distances)
 return [x,y,distances]
}
module.exports=Distance()