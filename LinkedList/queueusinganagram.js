let input=require('readline-sync')
let Utility=require('../utility')
let  LinkUtil=require('../LinkedList/linkedqueue')

function anagramstack()
{
    start=1,end=1000
    arrayOfPrime=Utility.Isprime(start,end)
   
  
  anagram=Utility.anagram(arrayOfPrime)
  console.log(anagram[0])
   
let linked=new LinkUtil.LinkedList()
let j=0, array=[]
for(let i=0;i<anagram[0];i++)
{
    linked.push(anagram[0][i])
}



while(!linked.isempty())
{
array[j]=linked.pop()

j++
}
console.log(array)
}
module.exports=anagramstack() 