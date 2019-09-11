


const mongoose =require('mongoose')

// create a schema 
let chatAppSchema= mongoose.Schema({
   
    senderId : String,
    senderName : String,
    recieverId : String,
    recieverName : String
 },
 {
    //    timestamp:true
});
    let model = mongoose.model('chatApp',chatAppSchema);
    exports.chatAppModel=(chatData,callback)=>{




    let appUser=new model({

        senderId :chatData.senderId ,
        senderName:chatData.senderName,
        recieverId :chatData.recieverId,
        recieverName:chatData.recieverName

    })

// save the data 
      appUser.save((err,data)=>{
        if(err)
        {
            callback(err)
        }
        else if(data.length> 0) 
        {   
            console.log("\n\n\n\t\t\added SUCCESFULLY !!!!   ");
            
            
            callback(null," user entered")
        }
    })
  } 

    



