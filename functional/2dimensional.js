function TwoDimensional()
{
    var Input=require('readline-sync')
var Utility=require('../kajal/utility')

var row,column;
console.log("Enter row and column");
row=Input.question()
column=Input.question()
var arrayInteger=new Array()
var arrayDouble=new Array()
arrayInteger=Utility.SetInteger(arrayInteger,row,column);
arrayDouble=Utility.SetDouble(arrayDouble,row,column);

console.log(" Integer Array element");
Utility.displayArray(arrayInteger);
console.log(" Double Array element");
Utility.displayArray(arrayDouble);



}

module.exports=TwoDimensional()