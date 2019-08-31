
  
let input = require('readline-sync')
let utility = require('../LinkedList/stack')
//let Utility = require('../utility')
function stack() {  
console.log("enter the expression")
let expression=input.question()

let Exp=expression.toString().split('') 
console.log(Exp) 
let StackObject = new utility.Stack()

//Utility.parenthesis(Exp)

for(let i=0;i<Exp.length;i++)
{
    if (Exp[i] == '}' ||Exp[i]== ')' || Exp[i] == ']')
    {
    StackObject.push(Exp[i])
    }


    else if (Exp[i] == '{' ||Exp[i]== '(' || Exp[i] == '[')
    {
    StackObject.pop(Exp[i])
    }
}

let value=StackObject.isempty()

if (value==true)
    {
    console.log("not Balanced");
    }
    else
    {
 console.log(" Balanced");
    }
  
   
    
} 
module.exports=stack();