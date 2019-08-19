function BinarySearchWord()
{
var Input=require('readline-sync');
var Utility = require('../kajal/utility')
var fs = require("fs");  

fs.readFile('input.txt', function (err, data) {  
  var array = data.toString().split(" ");
  
 
   array.sort()
   console.log(array)
   console.log("enter the key element")
   var key=Input.question()
  

Utility.Binarysearchfile(array,key)
}); 
}
module.exports=BinarySearchWord() 
