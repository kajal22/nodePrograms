var fs = require("fs");  
var data = fs.readFileSync('input.txt',function(err,data){
  if(err) 
  return console.log(err);
  console.log(data.toString());  
});  

console.log("Program Ended"); 