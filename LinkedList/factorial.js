


let input=require('readline-sync')
console.log("Enter number")
 let num=input.questionInt()

function factorial(num)
{
if (num >= 1)
        return num*factorial(num-1);
    else
        return 1;

}




 let fact1=factorial(2*num)
 let fact2=factorial(num+1)
 let fact3=factorial(num)

 console.log("factorial of 2*n="+fact1)
 console.log("factorial of n+1="+fact2)
 console.log("factorail of n="+fact3)

 //formula:Cn=(2n)!/((n+1)! * n!)
 let total=(fact1/(fact2*fact3))
 console.log("Total number of nodes will create="+total)