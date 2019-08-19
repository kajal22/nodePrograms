module.exports={demo:function(){
{
    var user = require('readline-sync')
    console.log('enter number')
    var demo = user.questionInt()
    var utility = require('../utility')
    var squareOfTheNumber = utility.sq(demo)
    return squareOfTheNumber
}
}
}
