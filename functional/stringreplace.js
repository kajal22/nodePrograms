

var Utility = require('../kajal/utility')
function replace()
{
	var String= "Hello username, How are you";
    var name="";
    
    console.log("original string:",String);

   do
    {
    console.log("enter your sting");
    name=Utility.getString();
	  }while(name.length<3);
	
		String=Utility.replaceString(String,name);
	    console.log("after replacement of string:\n",String);
}
module.exports=replace();








