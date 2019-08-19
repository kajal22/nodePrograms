
function Sum()
{
 var user=require('readline-sync')
 var Utility = require('../utility')
 var array = [1,0,-3,-5,5];

console.log(array)
sumofthree=Utility.SumOfIntegers(array)
console.log(sumofthree)
return [array,sumofthree]
  

}
module.exports=Sum()
