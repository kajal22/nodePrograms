


const mongoose =require('mongoose')

// create a schema 
let chatAppSchema= mongoose.Schema({
   
    senderId : {
        type:String,
        require:[true,"id should be number"]
    },
    senderName : {
        type:String,
        require:[true,"name should be string"]
    },
    
    recieverId : {
        type:String,
        require:[true,"id should be number"]
    },
    recieverName : {
        type:String,
        require:[true,"name should be string"]
    },
    message:{
        type:String,
        require:[true,"message should be string"]
    }
 },
 {
     timestamp:true
});
    let chatModel = mongoose.model('chatApp',chatAppSchema);
    exports.chatAppModel=(chatData,callback)=>{


console.log("model");


    let appUser=new chatModel({

        senderId :chatData.senderId ,
        senderName:chatData.senderName,
        recieverId :chatData.recieverId,
        recieverName:chatData.recieverName,
        message:chatData.message
    })

// save the data 
      appUser.save((err,data)=>{
        if(err)
        {
          return  callback(err)
        }
        else  
        {   
            console.log("\n\n\n\t\t\added SUCCESFULLY !!!!   ");
            return callback(null,data)
        }
       
    })
  } 

    
  exports.getChatModel=(callback)=>{ 
    chatModel.find({},(err,userData) =>{
        if(err)
        {
        return callback(err)
        }
        else if(userData.length>0)
        {
         
            
          return callback(null,userData)
        }
        else
        {
        return callback(null,false)
        }
    })
}




