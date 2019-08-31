function Quadratic()
{
 var user=require('readline-sync')
 var Utility = require('../utility')
 console.log("enter the values")
 a=user.questionInt()
 b=user.questionInt()
 c=user.questionInt()
 quadratic=Utility.RootOfQuadratic(a,b,c)
 console.log(quadratic)

 return [a,b,c,quadratic]
}
module.exports=Quadratic(                                                                      )