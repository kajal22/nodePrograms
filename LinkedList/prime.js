let input=require('readline-sync')
let Utility=require('../utility')
 


function prime()
{
   ArrayOfPrime=[[]]
   for(i=0;i<10;i++)
{
    value=100
    let array=Utility.Isprime((value*i)+1,(value*i)+100)
    ArrayOfPrime[i]=[]
    for(j=0;j<array.length;j++) 
    {
        ArrayOfPrime[i][j]=array[j]
    }
}
// for printing
console.log("prime numbers are")
for(i=0;i<10;i++)
{
    for(let j=0;ArrayOfPrime[i][j]!=undefined;j++){
process.stdout.write(ArrayOfPrime[i][j]+" ")  

}
console.log();
}
}
module.exports=prime()                                                                                            