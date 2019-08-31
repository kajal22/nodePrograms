
var input=require('readline-sync')
var fs = require('fs');
let utility=require('../LinkedList/list2')
function orderList2(){

 	
let array=new Array()
let data=fs.readFileSync('input2.txt')
  
array=(data.toString().split(","))
    array.sort()
    console.log(array)



let list= new utility.LinkedList;
for(let i=0;i<array.length;i++)
{
  list.insertAdd(array[i]) 
  
}

//Enter key to Find
console.log("Enter element to Search")
let key=input.question()

//Search element
let found=list.searchElement(key)
console.log(found)

//Find Index Location
let position=list.findLocation(key)
console.log(position)


//if element present then remove
if(found===true)
{
    list.removeAt(position)
    let data=list.printListData()
    fs.writeFileSync('input2.txt',data)
    console.log(data)
}

//else Add element
else
{
   list.insertAdd(key)
   let data=list.printListData()
    fs.writeFileSync('input2.txt',data)
    console.log(data)
}

  }
module.exports=orderList2()
