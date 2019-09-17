
const chatModel = require('../model/chatModel')

class ChatService{
chatAppService(chatData, callback) {
    try {
        chatModel.chatAppModel(chatData, (err, data) => {
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

/********/
getChatService (callback) {
    try {
        chatModel.getChatModel((err, data) => {
            console.log("i am in services");
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
}
const chatServiceObject=new ChatService()
 module.exports=chatServiceObject