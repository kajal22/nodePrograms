
/*************************************************************************

* Purpose          : fundoo
* @file            : userService.js
* @author          : kajal choudhary
* @version         : 1.0
* @since           : 25-09-2019
* 
**************************************************************************/

const userModel = require('../model/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const nodemailer = require('../services/nodemailer')
class Service {


    generateToken(payload) {
        let token = jwt.sign(payload, 'secret', { expiresIn: '6hr' })
        return token;
    }

    encryptPassword(password) {
        let saltRounds = 10
        let salt = bcrypt.genSaltSync(saltRounds)
        let encryptPassword = bcrypt.hashSync(password, salt)
        return encryptPassword;
    }
    registrationService(userData) {

        console.log(userData.email);

        return new Promise((resolve, reject) => {
            userModel.findEmail(userData.email)
                .then(data => {
                    let registerDetail = {
                        "firstName": userData.firstName,
                        "lastName": userData.lastName,
                        "email": userData.email,
                        "loginType": userData.loginType,
                        "password": this.encryptPassword(userData.password)
                    }
                    // pass to model to save the data
                    userModel.registrationSaveUser(registerDetail)

                        .then(data => {
                            resolve(data)
                        })
                        .catch(error => {
                            console.log("error is")
                            reject(error)
                        })

                })
                .catch(error => {
                    reject(error)
                })

        })

    }
    /**************loginservice**************/
    loginService(loginData) {
        return new Promise((resolve, reject) => {
            userModel.searchEmail(loginData.email)
                .then((data) => {
                    console.log(data)

                    if (data.length > 0) {
                        let payload = {
                            '_id': data[0]._id
                        }
                        bcrypt.compare(loginData.password, data[0].password, (err, result) => {
                            console.log(result)
                            if (err) {
                                console.log("password not matched");
                                reject(err)
                            }
                            else if (result) {
                                let newToken = this.generateToken(payload);
                                console.log(newToken)
                                console.log("password matched")
                                console.log("\n\n\t\tLOGIN SUCCESSFULL !");


                                userModel.saveToken(newToken, data[0])
                                    .then(Response => {
                                        resolve(Response)

                                    }).catch(error => {
                                        console.log("error in catch")
                                        reject(error)
                                    })
                            } else {
                                reject("Password not matched")
                            }
                        })
                    } else {
                        reject("Credential not Matched")
                    }
                })
        })
    }
    /***************forgetPassword************/
    forgetPassService(forgetData) {
        return new Promise((resolve, reject) => {
            userModel.searchEmail(forgetData.email)
                .then((data) => {
                    console.log(data)
                    if (data.length > 0) {
                        let payload = {
                            '_id': data[0]._id
                        }
                        console.log("matched email")
                        let newToken = this.generateToken(payload);
                        console.log(newToken)
                        nodemailer.sendmail(forgetData.email, newToken), (err, response) => {
                            if (err) {
                                console.log("error in mail");
                                return callback(err)
                            }
                            else {
                                console.log("mail sent sucessfully!!");
                                return callback(null, response)
                            }
                        }
                        resolve(data)
                    }
                }).catch(error => {
                    console.log("error while sending mail")
                    reject(error)
                })
        })
    }
    /**********resetPassword************/
    resetPassService(resetData) {
        console.log("resetdataaaaaaaaaa", resetData._id);

        let hashedPassword = this.encryptPassword(resetData.password)
        console.log("passpssseddd", hashedPassword);

        return new Promise((resolve, reject) => {
            userModel.resetPassword(resetData._id, hashedPassword)

                .then(data => {
                    console.log("inside service");
                    resolve(data)

                }).catch(error => {
                    console.log("error in catch")
                    reject(error)
                })

        })
    }
}
const serviceObject = new Service()
module.exports = serviceObject;