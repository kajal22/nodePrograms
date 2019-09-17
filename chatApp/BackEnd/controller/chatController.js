const express = require('express')
const chatService = require('../services/chatService')

class ChatController{


chatAppControl  (req, callback)  {
  try {
    console.log("control")
    let chatData = {
      senderId: req.senderId,
      senderName: req.senderName,
      recieverId: req.recieverId,
      recieverName: req.recieverName,
      message: req.message
    }

    // the userdata will send to services
    chatService.chatAppService(chatData, (err, data) => {

      if (err) {
        return callback(err)
      }
      else {
        
        return callback(null, data)
      }
    })
  } catch (err) {
    console.log(err)
  }
}



/*************/
getChatControl (req, res)  {
  try {
    chatService.getChatService((err, data) => {

      if (err) {
        return res.status(400).send(err)
      }
      else {
        console.log("controller");

        return res.status(200).send(data)
      }
    })
  } catch (err) {
    console.log(err)
  }
}


}
const chatControlobject=new ChatController()
 module.exports=chatControlobject