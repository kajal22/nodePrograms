
/*************************************************************************

* Purpose          : chatApp
* @file            : model.js
* @author          : kajal choudhary
* @version         : 1.0
* @since           : 5-09-2019
* 
**************************************************************************/




const bcrypt = require('bcrypt');
const mongoose = require('mongoose')
let tokenGenrator = require('../middleWare/tokengenrate')
let nodeMail = require('../middleWare/nodemailer')


const Schema = mongoose.Schema;
// create a schema 
let registrationSchema = new Schema({

    firstName:
    {
        type: String,
        require: [true, "name should be string"]
    },
    lastName:
    {
        type: String,
        require: [true, "name should be string"]
    },
    email: {
        type: String,
        require: [true, "email should be string"]
    },
    password: {
        type: String,
        require: [true, "password should be string"]
    },
},
    {
        //    timestamp:true
    });
let model = mongoose.model('registration', registrationSchema);


function encryptPassword(password) {
    let saltRounds = 10
    let salt = bcrypt.genSaltSync(saltRounds)
    let encryptPassword = bcrypt.hashSync(password, salt)
    return encryptPassword;
}


class Model{


registrationModel (userData, callback) {
    try {
        console.log("in register model !");

        model.find({ email: userData.email }, (err, data) => {

            if (err) {
                callback(err)
            }
            else if (data.length > 0) {
console.log("already exist")
                return callback(null,false)
            }

            else {



                let newUser = new model({

                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    email: userData.email,
                    password: encryptPassword(userData.password)

                })

                // save the data 
                newUser.save((err,data) => {
                    if (err) {
                        return callback(err)
                    }else{
                        console.log("\n\n\n\t\t\tNEW USER REGISTERED SUCCESFULLY !!!!   ")
                        callback(null, true)
                    }
                })
            }
        })
    } catch (err) {
        console.log(err)
    }
}



/***************/

loginModel(loginData, callback){
    try {
        model.find({ 'email': loginData.email }, (err, data) => {
            console.log(data)
            if (err) {
                console.log("error generated while login")
                return callback(err)
                
            }
            else if (data.length > 0) {
                let payload = {
                    '_id': data[0]._id
                }


                    bcrypt.compare(loginData.password, data[0].password, (err, res) => {
                        if (err) {
                            return callback(err)
                           
                        }
                        else if (res === true) {

                            console.log("\n\n\t\tLOGIN SUCCESSFULL !");
                            let newToken = tokenGenrator.generateToken(payload);

                            let loginResp = {
                                    email: data[0].email,
                                    userId: data[0]._id,
                                    name: data[0].firstName,
                                    token: newToken
                            }
                            callback(null, loginResp);

                        }
                        else if (res === false) {

                            callback(null, false);


                        }
                    })
                
            }
            else {
                
                let loginResp = {
                    'success': false,
                    'messege': 'not registered',
                    
                }
                callback(null, loginResp);
            }
        })
    } catch (err) {
        console.log(err)
    }
}
//***********************/

forgetModel(forgetData, callback) {
    try {

        model.find({ 'email': forgetData.email }, (err, data) => {
         
            if (err) {
                callback(err)
            }
            else if (data.length > 0)
             {
                console.log("matched")

                let payload = {
                    '_id': data[0]._id
                }
                // create new token 
                let newToken = tokenGenrator.generateToken(payload);
                console.log(newToken);

                // send on that email-id       
                nodeMail.sendmail(forgetData.email,newToken,(err,mailResp) => {
                  
                    if (err) {
                        console.log("Errorrrrrrrrrrrr Email sent successfully")
                        callback(err)
                    }
                    else {
                        console.log("model data***===>",mailResp)
                        callback(null,mailResp)
                    }
                })

            }

            
        })
    } catch (err) {
        console.log(err)
    }
}

resetModel(resetdata, callback) {
    try {
        console.log(resetdata)
        let hashedPassword = encryptPassword(resetdata.password)


        model.findOneAndUpdate({ '_id': resetdata.id }, { $set: { 'password': hashedPassword } }, (err, data) => {
            if (err) {
                console.log("update the error");
                return callback(err + " update the error")
            } else {
                    console.log("update successfully");
                    return callback(null, data)

            }
        })
    } catch (err) {
        console.log(err)
    }
}


/*****modified****/

getListDataModel(callback){
    try {
        model.find({}, ['_id', 'firstName'], (err, userData) => {
            if (err) {
                return callback(err)
            }
            else if (userData.length > 0) {
console.log("get all user")

                return callback(null, userData)
            }
            else {
                return callback(null, false)
            }
        })
    } catch (err) {
        console.log(err)
    }
}
}
const modelObject=new Model()
 module.exports=modelObject









