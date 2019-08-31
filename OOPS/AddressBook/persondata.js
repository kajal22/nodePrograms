
let input=require('readline-sync')

class Persondata{
    constructor(){
    
firstname=""
lastname=""
address=""
phone=0
    }

setfirstname(firstname)
{
this.firstname=firstname;
}

getfirstname()
{
    return this.firstname
}

setlastname(lastname)
{
this.lastname=lastname;
}

getlastname()
{
   return this.lastname;
}

setaddress(address)
{
this.address=address;
}
getaddress()
{
return this.address;
}

setphone(phone)
{
this.phone=phone;  
}
getphone()
{
return this.phone;
}


setcity(city)
{
this.city=city;  
}
getcity()
{
return this.city;
}

setstate(state)
{
this.state=state;  
}
getstate()
{
return this.state;
}
setzip(zip)
{
this.zip=zip;  
}
getzip()
{
return this.zip;
}
}
module.exports={Persondata}