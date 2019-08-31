function windchill()
{
    var user=require('readline-sync')
    var Utility=require('../utility')
    console.log("enter the value t and v")
     var t=user.questionInt()
    
     var v=user.questionInt()
    var result=Utility.windchil(t,v)
    console.log(result)
    return [,v,result] 
}

    module.exports=windchill()
