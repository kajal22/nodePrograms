
const chatModel=require('../model/chatModel')

exports.chatAppService=(chatData,callback)=>{

    chatModel.chatAppModel(chatData,(err,data)=>{
    if(err)
    {
   return callback(err)
    }
    else{ 
    return callback(null,data)
    }
})
}

/********/
exports.getChatService=(callback)=>{

    chatModel.getChatModel((err,data)=>{
        console.log("i am in services");
    if(err)
    {
  return callback(err)
    }
    else{
    
    return callback(null,data)
    }
})
}