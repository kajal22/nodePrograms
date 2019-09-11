const express = require('express')
const chatService=require('../services/chatService')
const service=require('../services/services')
exports.chatAppControl=(req,res)=>{
  
  
    
      console.log("control")
      let chatData={
        senderId:req.body.senderId,
        senderName:req.body.senderName,
        recieverId:req.body.recieverId,
        recieverName:req.body.recieverName
      }
    
    
    // the userdata will send to services
    chatService.chatAppService(chatData,(err,data)=>{
    
        if(err){
            return res.status(400).send(err)
        }
        else{
           
            return res.status(200).send(data)
        }
    })
    }
    