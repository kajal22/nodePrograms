const express = require('express')
const chatService=require('../services/chatService')

exports.chatAppControl=(req)=>{
  
  
    
      console.log("control")
      let chatData={
        senderId:req.body.senderId,
        senderName:req.body.senderName,
        recieverId:req.body.recieverId,
        recieverName:req.body.recieverName,
        message:req.body.message
      }
    
    
    // the userdata will send to services
    chatService.chatAppService(chatData,(err,data)=>{
    
        if(err){
            return (err)
        }
        else{
           
            return (data)
        }
    })
    }
    
/*************/
    exports.getChatControl=(req,res)=>{
      let error= req.validationErrors()
    
      
      if(error)
      {
          return res.status(422).send(error)
      }
      else 
      {
  
       console.log(" in controlller");
      
      // the userdata will send to services
      chatService.getChatService((err,data)=>{
      
          if(err){
              return res.status(400).send(err)
                 }
          else {
             console.log("controller");
             
              return res.status(200).send(data)
               }
      })
      }
      }