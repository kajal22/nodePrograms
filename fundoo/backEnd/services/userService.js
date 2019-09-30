
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
                                        console.log("SAAVED DATA ID", data._id)
                                        let payload = {
                                            '_id': data._id
                                        }

                                        let newToken = utility.generateToken(payload);
                                        console.log(newToken);
                                        let verify = '<h1>click on link to for verification</h1><br><p>Click here <a href="http://localhost:4000/#/verify/' + newToken + '"><u>Click here</a></u> to reset</p>'
                                        nodemailer.sendmail(data.email, verify, newToken)
                                            .then((response) => {
                                                console.log(response);
                                                console.log("mail sent sucessfully!!");
                                                console.log("RESPONSE MAIL", response);
                                                resolve(response);
                                            }).catch((err) => {
                                                reject(err)
                                            })
                                        resolve(data)
                                    })
                                    .catch(error => {
                                        console.log("ERROR is CATCHED")
                                        reject(error)
                                    })
                            }

                        }).catch(error => {
                            reject("ERROR")
                        })


                } else {
                    reject("mail not existed")
                }
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
                    console.log("datataaaa", data);

                    if (data.length > 0) {

                        userModel.searchEmailVerification(data[0]._id)
                            .then((data) => {
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
                                        else if (result == true) {
                                            let newToken = utility.generateToken(payload);
                                            console.log(newToken)
                                            console.log("password matched")
                                            console.log("\n\n\t\tLOGIN SUCCESSFULL !");

                                            userModel.saveToken(newToken, data[0])
                                                .then(dataObject => {

                                                    resolve(dataObject)

                                                }).catch(error => {
                                                    console.log("error in catch")
                                                    reject(error)
                                                })
                                        } else {
                                            reject("login Failed")
                                        }
                                    })
                                } else {
                                    reject("Credential not verified")
                                }
                            }).catch((err) => {
                                reject(err)
                            })

                    } else {
                        reject("email not found")
                    }
                }).catch((err) => {
                    reject(err)
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
                        let resetLink = '<h1>click on link to for Reset Password</h1><br><p><a href="http://localhost:4000/#/resetPassword/' + newToken + '"><u>Click here</a></u> to reset</p>'
                        nodemailer.sendmail(forgetData.email, resetLink, newToken).then((response) => {
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
        let hashedPassword = utility.encryptPassword(resetData.password)
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
    

    async verifyEmailService(tokenData) {

        try {

            let updateResult = await userModel.updateDocument(tokenData.id, true)

            if (updateResult) {
                return true
            } else {
                return false
            }

        } catch (error) {
            console.log(error);
        }
    }
}
const serviceObject = new Service()
module.exports = serviceObject;