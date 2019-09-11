
const model=require('../model/chatModel')

exports.chatAppService=(resetData,callback)=>{
    
model.chatAppModel(resetData,(err,data)=>{
console.log("service")
    if(err)
    {
   return callback(err)
    }
    else{ 
    return callback(null,data)
    }
})
}