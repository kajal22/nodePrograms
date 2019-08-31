const fs=require('fs')
fs.readFile('ABC.json',function(err,data){
let object = JSON.parse(data)
console.log(object.name)
});