
/*************************************************************************

* Purpose          : fundoo
* @file            : userService.js
* @author          : kajal choudhary
* @version         : 1.0
* @since           : 25-09-2019
* 
**************************************************************************/
const emailExistence = require('email-existence')
const userModel = require('../model/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const utility = require('../utility')
const nodemailer = require('../services/nodemailer')
class Service {




    registrationService(userData) {

        return new Promise((resolve, reject) => {
            emailExistence.check(userData.email, function (error, response) {
                console.log(userData.email)
                console.log('res: ' + response);

                if (response == true) {
                    userModel.findEmail(userData.email)
                        .then(data => {
                            if (data) {
                                reject("email already existed")
                            } else {

                                let registerDetail = {
                                    "firstName": userData.firstName,
                                    "lastName": userData.lastName,
                                    "email": userData.email,
                                    "loginType": userData.loginType,
                                    "password": utility.encryptPassword(userData.password)
                                }
                                // pass to model to save the data
                                userModel.registrationSaveUser(registerDetail)
                                    .then(data => {
                                        console.log("SAVED DATA", data)
                                        console.log("SAAVED DATA ID", data._id)
                                        let payload = {
                                            '_id': data._id
                                        }

                                        let newToken = utility.generateToken(payload);

                                        nodemailer.sendmail(data.email, newToken)
                                            .then((response) => {
                                                console.log(response);
                                                console.log("mail sent sucessfully!!");
                                                console.log("RESPONSE MAIL", response);
                                                resolve(response);
                                            }).catch((err) => {
                                                reject(err)
                                            })
                                    })
                                    .catch(error => {
                                        console.log("ERROR is CATCHED")
                                        reject(error)
                                    })
                            }
                            resolve(data)
                        })

                } else {
                    reject("mail not existed")
                }
            })
                .catch(error => {
                    reject("ERROR")
                })

        })

    }
    /**************loginservice**************/
    //while login it compare login password and registered password by bcrypt compare if password matched
    //login successfull 

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
                                let newToken = utility.generateToken(payload);
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

    // forgetPassword First it will find the email to check that email is present or not if mail found 
    // then generate a token specifies the user's identity from token then send mail to user's mail'id through nodemailer 
    //came from nodemailer as response email sent ...

    forgetPassService(forgetData) {
        console.log(forgetData, "forgetdata");
        return new Promise((resolve, reject) => {
            userModel.searchEmail(forgetData.email)
                .then((data) => {
                    if (data.length > 0) {
                        let payload = {
                            '_id': data[0]._id
                        }
                        let newToken = utility.generateToken(payload);
                        console.log(newToken)
                        nodemailer.sendmail(forgetData.email, newToken).then((response) => {
                            console.log(response);
                            console.log("mail sent sucessfully!!");
                            console.log("RESPONSE MAIL", response);
                            resolve(response)
                        }).catch((err) => {
                            reject(err)
                        })

                    } else {
                        reject("email not registerd")
                    }
                }).catch(error => {
                    console.log("error while sending mail")
                    reject(error)
                })
        })
    }
    /**********resetPassword************/

    // //new password will encrypted that store in hashedPassword passed to model

    resetPassService(resetData) {
        let hashedPassword = this.encryptPassword(resetData.password)
        console.log("password", hashedPassword);
        return new Promise((resolve, reject) => {
            userModel.resetPassword(resetData._id, hashedPassword)
                .then(data => {
                    resolve(data)

                }).catch(error => {
                    console.log("error")
                    reject(error)
                })
        })
    }

    //******************verifyEmail*************/
    verifyTokenService(tokenData) {
        return new Promise((resolve, reject) => {
            userModel.updateStatus(tokenData.id, true)
                .then(data => {
                    resolve(data)

                }).catch(error => {
                    console.log("error")
                    reject(error)
                })
        })
    }
}
const serviceObject = new Service()
module.exports = serviceObject;