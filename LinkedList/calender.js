let input=require('readline-sync')
let utility = require('../utility')
function calender() {  
    let days=["0","31", "28","31","30","31","30","31","31","30","31","30","31" ]
    let months=[" ","jan","feb","march","april","may","june","july","august","september","october","november","december"]
let i
console.log("enter MONTH")
month=input.question()
console.log("enter YEAR")
year=input.question()

if (month == 2 && utility.YEAR(year)==true)
{
 days[month] = 29;
}
console.log("   " + months[month] + " " + year);
        console.log(" S  M  Tu  W Th  F  S");
        let day=1
        let D = utility.DayOfWeek(month,day,year)
        console.log(D)

        for( i=0;i<D;i++)
        {
        process.stdout.write("   ")
        }

        for(i=1;i<=days[month];i++)
        {
            if(i<10)
            {
                process.stdout.write(" ")   
            }
            process.stdout.write(" "+i)   
       
        if (((i+D)%7 )== 0)
        {
        console.log()
        }   
        }
    }

module.exports=calender()