let input=require('readline-sync')
let utility = require('../LinkedList/queue')
function queue() {  
    
    let object= new utility.Queue()
    console.log("enter the string")
    let string=input.question()
    String=string.split('')
    console.log(String)
    for(let i=0;i<String.length;i++)
    {
        object.enqueue(String[i])
    }
    let ans=1
    for(let i=0;i<Math.floor(string.length/2);i++)
    {
       let value1,value2;
       value1=object.RemoveFront()
       value2=object.Removerear()

       if(value1!=value2)
        {
           let ans=0
           break;
        }
    }
       if(ans==0)
       {
           console.log("not palindrome")
       }
           else{
           console.log(" palindrome")
               }
       
    }

    module.exports=queue()