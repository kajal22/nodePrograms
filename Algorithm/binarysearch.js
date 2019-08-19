function Binarysearch()
{
var Input=require('readline-sync');
var Utility = require('../kajal/utility')
console.log("enter the size of the array")
SizeOfArray=Input.questionInt()
console.log("enter the array element")
var array= new Array();
for(i=0;i<SizeOfArray;i++)

array[i]=Input.question()

console.log(array)
console.log("enter the key to find")
key=Input.questionInt()
Utility.Binary(array,key)

}
module.exports=Binarysearch();