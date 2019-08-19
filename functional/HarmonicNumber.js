function Harmonic()
{
    var user = require('readline-sync')
    console.log('enter number')
    var Input = user.questionInt()
    var utility = require('../utility')
    harmonic = utility.HarmonicNumber(Input)
        console.log(harmonic)
        return [Input,harmonic]
    

}
module.exports=Harmonic()

