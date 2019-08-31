
let input=require('readline-sync')
let Utility=require('..//utility')

function anagram()
{
    start=1,end=1000
  arrayOfPrime=Utility.Isprime(start,end)
 

anagram=Utility.anagram(arrayOfPrime)
console.log(anagram[0])
console.log("Not anagram")
console.log(anagram[1])
  
  
}
module.exports=anagram()  

