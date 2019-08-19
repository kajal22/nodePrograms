function Prime()
{
    var user = require('readline-sync')
    var Utility = require('../kajal/utility')
 for(i=2;i<=1000;i++)
 {  
    var prim=Utility.Isprime(i) 
    if(prim!=null)
    {
      console.log(prim)
    }
    }
}
module.exports=Prime()
