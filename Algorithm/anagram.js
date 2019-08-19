
function anagram()
{
    var Input=require("readline-sync");
    var Utility = require('../kajal/utility')
    console.log("enter first string:");
    var String1 = Input.question()

    console.log("enter second string:");
    var String2 = Input.question()

    var output1 = String1.split('');
    console.log(output1);
    var output2 = String2.split('');
    console.log(output2);
    Utility.IsAnagram(output1,output2);
}
    module.exports=anagram();