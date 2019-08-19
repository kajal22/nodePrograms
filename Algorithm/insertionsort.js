function Insertion()
{
var Input=require('readline-sync');
var Utility = require('../kajal/utility')
console.log("enter the size of the array")
SizeOfArray=Input.questionInt()
console.log("enter the array element")
var array1= new Array();
for(i=0;i<SizeOfArray;i++)

array1[i]=Input.questionInt()

console.log(array1)

Utility.insertion(array1)
}
module.exports=Insertion();