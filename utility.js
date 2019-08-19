//square
var readInput=require("readline-sync");
module.exports= 
{
    sq(number)
    {
        var squareOfTheNumber=number*number
        return squareOfTheNumber

    },
     
    // replace string

    getString()   
{  
	return readInput.question("");
},


replaceString(String,name)
{
    return String.replace("username",name);	
},


// leap year or not
YEAR(year)
{
if(year% 4==0 && year%100!=0 || year%400==0 )
{
    console.log("is leap year");
}
    else
    {
    console.log("is not leap year");
    }

},


// power of a number

power(PowerOfNumber)
{
    var output;
    for(var i=1;i<=PowerOfNumber;i++)
      {
          console.log(Math.pow(2,i));
        
      }
},

// harmonic number
HarmonicNumber(Input)
{
    result=0;
    for(var i=1;i<Input;i++)
{
    var result=result+parseFloat(1/i);
}
  return result

},

// sumofinteger

SumOfIntegers(array)
{
    var i,j,k
  
for(i=0;i<array.length-2;i++)
{
    for(j=i+1;j<array.length-1;j++)
    {
        for(k=j+1;k<array.length;k++)
        {
           if((array[i]+array[j]+array[k])==0)
           {
               console.log("  "+array[i] + ","+array[j] + ","+array[k])
               
               return [array[i],array[j],array[k]]
           }
        }
    }
}
},
//2dimensional
SetInteger(array,row,column)
    {   
        console.log("enter "+row*column+" total element to fiil twoD array of Integer");
        for(var i=0;i<row;i++)
        {   array[i]=[];
            for(var j=0;j<column;j++)
            {
                array[i][j]=parseInt(readInput.question());
            }
        }
        return array;
    },
SetDouble(array,row,column)
    {   
        console.log("enter "+row*column+" total element to fiil twoD array of Double");
        for(var i=0;i<row;i++)
        {   array[i]=[];
            for(var j=0;j<column;j++)
            {
                array[i][j]=parseFloat(readInput.question()).toFixed(2);
            }
        }
        return array;
    },


    

    /**
    * method taken array and display all element of array
    */
    displayArray(array)
    {
        console.log(array);
    },
    
//stop watch
StopWatch()
{
var Input=require('readline-sync');

 console.log("Enter one:")
var one=Input.question()
    var start=new Date()

    console.log("Enter Two :")
    var two=Input.question()
   
    
    var finish=new Date()

    var time=finish-start

console.log("time is " + (finish - start) + " ms");  
},


//distances
Distances(x,y)
{
     var value=(Math.sqrt(Math.pow(x,2)+Math.pow(y,2))) 
   
    return value
},


//quadratic

RootOfQuadratic(a,b,c)
    {
       
           var delta=(b*b)-(4*a*c);
           if(delta>0)
           {
               var root1=(-b + Math.sqrt(delta))/(2*a);
               var root2=(-b - Math.sqrt(delta))/(2*a);
               console.log(root1);
               console.log(root2);
           }    
           else
           {
          console.log(" can not find")
           }
    },

    //WINDCHILL

    windchil(t,v)
    {
        console.log("tuyhj")
        if(t>=1 && t<50 && v<120 && v>3)
        {
            var w = 35.74+0.6215*t+(0.4275*t-35.76)*Math.pow(v,0.16)
            console.log(w)
            
        }
        return w
    },



// anagram find

IsAnagram(output1,output2)
{
if(output1.length!=output2.length)
{
    console.log("String is not an anagram");  
}
else
{
    array1= output1.sort();
    array2= output2.sort();
    FormatString1= array1.toString();
    FormatString2= array2.toString();
}
if(FormatString1==FormatString2)
{
    console.log("is an anagram");
}
    else
    {
    console.log("is not an anagram");
    }
},

// prime number

Isprime(i)
{
    var count=0
for(var j=1;j<=i;j++)
{
    if(i%j==0)
    {
        count++
    }

}
if(count==2)
{
   return i
}
},


// BubbleSort code
bubblesort(array)
{
    for(var i=0;i<array.length;i++)
    {
        for(var j=0;j<array.length-1;j++)
        {
            if(array[j]>array[j+1])
            {
             var swap =array[j]
                array[j]=array[j+1]
                array[j+1]=swap
            }
       }
    }
    console.log("sorted array ")

    console.log(array)
},


//insertion sort

insertion(array1)
{
    var i
    for(i=1;i<array1.length;i++)
    {

    temp=array1[i]
    j=i;
    while(j>0 && temp<array1[j-1])
    {
        array1[j]=array1[j-1];
        j--;

    }
    array1[j]=temp;
   }
console.log("sorted array ")
    
    
       console.log(array1)
    

},


//binarysearch
Binary(array,key)
{
    var f=0;
    var l=array.length-1;
    var flag=0
    var m=parseInt((f+l)/2);
    while(f<=l)
    {
        
        if(array[m].localeCompare(key)==0)
         {
             flag=1
        console.log("found element at position:"+m );
        break;
         }
     else if(array[m]<key)
      {
        f=m+1;
    
      }
    else if(array[m]>key)
      {
        l=m-1; 
      }
      m=parseInt((f+l)/2);
    }  
 
    if(flag==0)
    console.log("not found element");
    
    
    
    },


    // BinarySearchword................
    Binarysearchfile(array,key)
    {
        var f=0;
        var l=array.length-1;
        var flag=0
        var m=parseInt((f+l)/2);
        while(f<=l)
        {
            
            if(array[m].localeCompare(key)==0)
             {
                 flag=1
            console.log("found element at position:"+m );
            break;
             }
         else if(array[m]<key)
          {
            f=m+1;
        
          }
        else if(array[m]>key)
          {
            l=m-1; 
          }
          m=parseInt((f+l)/2);
        }  
     
        if(flag==0)
        console.log("not found element");
        
        },


//DayofWeek
DayOfWeek(M,D,Y)
{
   
   var y= (Y-(14-M)/12)
   var x= (y+y/4-y/100 + y/400)
  var m=(M+12*((14-M)/12)-2)
  var d= parseInt(((D+x+31*m/ 12)%7))
    

   
    if(d == 1)
    {
        console.log("Monday");
    }
    else if(d == 2)
    {
        console.log("Tuesday");
    }
    else if(d == 3)
    {
        console.log("Wednesday");
    }
    else if(d == 4)
    {
        console.log("Thursday");
    }
    else if(d == 5)
    {
        console.log("Friday");
    }
    else if(d == 6)
    {
        console.log("Saturday");
    }
    else if(d == 0)
    {
        console.log("Sunday");
    }
  
},


//Tempconversion

celsiusConversion(temperature)
{

   var fahrenheit= (temperature * 9/5) + 32 
   console.log(fahrenheit)
},

fahrenheitConversion(temperature)
{
var celsius= (temperature - 32) * 5/9 
console.log(celsius)
},

//monthlyPayment
Payment(n,r,amount)
{
    var payment=parseInt(amount*r/(1-Math.pow(1+r,-n)))
    console.log(payment)
}, 


//sqrt.....

Sqrt(epsilon,c,t)
{
    while (Math.abs(t - c/t) > epsilon*t)
     {
        t = (c/t + t) / 2.0;
     }  
        console.log(t)
},


// binary number and swap
binary(number)
{
   
    var array= new Array()
   
    for(var i=0;i<8;i++)
    {
     array[i]=number%2
    number=parseInt(number/2)
    }
   return array.reverse()
},

binaryswap(BinaryValue)
{
   
    var i=BinaryValue.length/2;
    for(j=0;j<BinaryValue.length/2;j++)
    {
    var temp=BinaryValue[j]
        BinaryValue[j]=BinaryValue[i]
        BinaryValue[i]=temp
        i++;
    }
    return BinaryValue

},
Binaryswap(binaryswap)
{
var j=7,decimal=0
while(j>=0)
{
    for(var i=0;i<8;i++)
    {
         decimal=(decimal+Math.pow(2,j)*binaryswap[i])
         j--
    }
    
}
return decimal
},


//power
Binarypower(decimalvalue)
{

if(decimalvalue<=0)
   {
    return false;
   }
   
   while(decimalvalue > 1)
   {
  
    if(decimalvalue % 2 != 0)
        {
     return false;
        }
        decimalvalue = parseInt(decimalvalue/2);
      
   }
   
   return true;
  
  },



  
 





// vending .....
vending(amount) 
{   var total=0
    var note2000 = note500 = note100 = note50 = note20 = note10 = note5 = note2 = note1 = 0;

    if(amount>=2000)
    {
    note2000=parseInt(amount/2000)
    amount=amount%2000
    }
    if(amount>=500)
    {
    note500=parseInt(amount/500)
    amount=amount%500
    }
    if(amount>=100)
    {
    note100=parseInt(amount/100)
    amount=amount%100
    }
    if(amount>=50)
    {
    note50=parseInt(amount/50)
    amount=amount%50
    }
    if(amount>=20)
    {
    note20=parseInt(amount/20)
    amount=amount%20
    }
    if(amount>=10)
    {
    note10=parseInt(amount/10)
    amount=amount%10
    }
    if(amount>=5)
    {
    note5=parseInt(amount/5)
    amount=amount%5
    }
    if(amount>=2)
    {
    note2=parseInt(amount/2)
    amount=amount%2
    }
    if(amount>=1)
    {
    note1=parseInt(amount)
    }
    
console.log("2000 note is "+note2000)
console.log("500 note is "+note500)
console.log("100 note is "+note100)
console.log("50 note is "+note50)
console.log("20 note is "+note20)
console.log("10 note is "+note10)
console.log("5 note is "+note5)
console.log("2 note is "+note2)
console.log("1 note is "+note1)

 total=+note1+note2+note10+note20+note50+note100+note500+note2000
console.log(total)
},

//tictacktoe..............


display(matrix,pos,player)
{
    if(pos==1)
      {
    matrix[0][0]=player
      }
    else if(pos==2)
        {  
        matrix[0][1]=player
        }
        if(pos==3)
        {
      matrix[0][2]=player
        }
      else if(pos==4)
          {  
          matrix[1][0]=player
          }
          else if(pos==5)
          {  
          matrix[1][1]=player
          }
          else if(pos==6)
          {  
          matrix[1][2]=player
          }
          else if(pos==7)
          {  
          matrix[2][0]=player
          }
          else if(pos==8)
          {  
          matrix[2][1]=player
          }
          else if(pos==9)
          {  
          matrix[2][2]=player
          }
          else  
          {
          console.log("invalid position")
          }
    

console.log(matrix[0][0], "|", matrix[0][1],  "|" , matrix [0][2] ) 
console.log(matrix[1][0], "|" ,matrix[1][1],  "|", matrix[1][2] ) 
console.log(matrix[2][0], "|" ,matrix[2][1] , "|",matrix[2][2] ) 
},
checkwin(matrix)
{
    var c=' '
if(matrix[0][0]==matrix[0][1] && matrix[0][1]==matrix[0][2])
c=matrix[0][0]

else if(matrix[1][0]==matrix[1][1] && matrix[1][1]==matrix[1][2])
c=matrix[1][0]

else if(matrix[2][0]==matrix[2][1] && matrix[2][1]==matrix[2][2])
c=matrix[2][0]

else if(matrix[2][0]==matrix[1][1] && matrix[1][1]==matrix[0][2])
c=matrix[2][0]

else if(matrix[0][0]==matrix[1][1] && matrix[1][1]==matrix[2][2])
c=matrix[0][0]

else if(matrix[0][0]==matrix[1][0] && matrix[1][0]==matrix[2][0])
c=matrix[0][0]

else if(matrix[0][1]==matrix[1][1] && matrix[1][1]==matrix[2][1])
c=matrix[0][1]

else if(matrix[0][2]==matrix[1][2] && matrix[1][2]==matrix[2][2])
c=matrix[0][2]

return c

},
}
