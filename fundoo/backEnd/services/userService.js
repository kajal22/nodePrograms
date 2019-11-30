
/*************************************************************************

* Purpose          : fundoo
* @file            : userService.js
* @author          : kajal choudhary
* @version         : 1.0
* @since           : 25-09-2019
* 
**************************************************************************/
const emailExistence = require("email-existence");
const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const redis = require("redis");
const utility = require("../utility");
const nodemailer = require("./emailService");
const path = require("path");
const ejs = require("ejs");
const redisUtility = require("../services/redisService");
const client = new redis.createClient();

class Service {


    /**
      @description-registration data find mail thruogh crud operation of read()
      if mail found then come back via using promises, if data not found then it
      will register using create(),after that data will save in model. mail will 
      send sucessfully after the registration.
     **/

    registrationService(userData) {
        return new Promise((resolve, reject) => {
            emailExistence.check(userData.email, function (error, response) {
                if (response === true) {
                    let searchByEmail = {
                        "email": userData.email
                    };
                    userModel.read(searchByEmail)
                        .then(data => {
                            if (data) {
                                reject("email already existed");
                            } else {

                                let registerDetail = {
                                    "firstName": userData.firstName,
                                    "lastName": userData.lastName,
                                    "email": userData.email,
                                    // "loginType": userData.loginType,
                                    "password": utility.encryptPassword(userData.password)
                                };

                                /****pass to model to save the data*****/
                                userModel.create(registerDetail)
                                    .then(data => {
                                        let payload = {
                                            "_id": data._id
                                        };

                                        /****token will generated using paylod that token verify***/
                                        let newToken = utility.generateToken(payload);

                                        console.log(newToken);
                                        redisUtility.redisSet(data._id + "setVerify", newToken)

                                            .then(redisData => {
                                                console.log("template", redisData);

                                                let verify = "http://localhost:3000/VerifyEmail/" + newToken;
                                                let template = ejs.renderFile(path.join(__dirname, "../view/register.ejs"),
                                                    { name: data.firstName, url: verify });
                                                template.then((ejsTemplate) => {
                                                    nodemailer.sendmail(data.email, ejsTemplate)
                                                        .then((response) => {
                                                            console.log("RESPONSE MAIL", response);
                                                            resolve(response);
                                                        }).catch((err) => {
                                                            reject(err);
                                                        });
                                                    resolve(data);
                                                }).catch(error => {
                                                    reject(error);
                                                });
                                            })
                                            .catch(error => {
                                                reject(error);
                                            });
                                        resolve(data);

                                    })
                                    .catch(error => {
                                        reject(error);
                                    });
                            }

                        }).catch(error => {
                            reject("ERROR");
                        });


                } else {
                    reject("mail not existed");
                }
            });

        });
    }
    /**************loginservice**************/

    /**
         @description- search email user data is present or not ,if prsent email then it 
         will verify through verifyEmailService method,if user will verify through mail before 
         the expire time then status will be true.while login it compare login password and 
         registered password by bcrypt compare if password matched login successfull.
        **/
    loginService(loginData) {
        return new Promise((resolve, reject) => {
            let searchByEmail = {
                "email": loginData.email
            };
            userModel.read(searchByEmail)
                .then((data) => {
                    /**email is present then chek in database isVerify is true or false**/
                    if (data.length > 0) {
                        if (data[0].isVerify == true) {
                            let payload = {
                                "_id": data[0]._id
                            };
                            /**password will be compare with entered password and database password**/
                            bcrypt.compare(loginData.password, data[0].password, (err, result) => {
                                if (err) {
                                    reject(err);
                                }
                                /** if password matched then generate token**/
                                else if (result == true) {
                                    let newToken = utility.generateToken(payload);
                                    console.log(newToken);
                                    redisUtility.redisSet(data[0]._id + "newTokenSet", newToken)
                                        .then(redisData => {
                                            console.log("\n\n\t\tLOGIN SUCCESSFULL !");
                                            let searchById = {
                                                _id: data[0]._id
                                            };
                                            let updateData = {
                                                token: newToken
                                            };
                                            userModel.update(searchById, updateData)
                                                .then(() => {
                                                    data[0].token = newToken;
                                                    resolve(data[0]);

                                                }).catch(error => {
                                                    reject(error);
                                                });
                                        })
                                        .catch(err => {
                                            reject(err);
                                        });
                                } else if (result == false) {
                                    reject("login Failed");
                                }
                            });
                        }
                        else {
                            reject("Registration not verified");
                        }

                    } else {
                        reject("email not found");
                    }
                }).catch((err) => {
                    reject(err);
                });
        });
    }
    /***********************forgetPassword***********************/

    /**
         @description
         forgetPassword First it will find the email to check that email is present or not if mail found 
         then generate a token specifies the user's identity from token then send mail to user's mail'id through nodemailer 
        came from nodemailer as response email sent ...
    ***/
    forgetPassService(forgetData) {
        return new Promise((resolve, reject) => {
            let searchByEmail = {
                "email": forgetData.email
            };
            userModel.read(searchByEmail)
                .then((data) => {
                    if (data.length > 0) {
                        let payload = {
                            "_id": data[0]._id
                        };
                        let newToken = utility.generateToken(payload);
                        redisUtility.redisSet(data[0]._id + "resetVerify", newToken)
                            .then(redisData => {
                            });
                        let resetLink = "<h1>click on link to for Reset Password</h1><br><p><a href=\"http://localhost:3000/#/resetPassword/" + newToken + "\"><u>Click here</a></u> to reset</p>";
                        nodemailer.sendmail(forgetData.email, resetLink, newToken).then((response) => {
                            console.log("mail sent sucessfully!!");
                            resolve(response);

                        }).catch((err) => {
                            reject(err);
                        });

                    } else {
                        reject("email not registerd");
                    }
                }).catch(error => {
                    reject(error);
                });
        });
    }
    /*********************resetPassword*********************/

    /**
    @description-new password will encrypted that store in hashedPassword passed to model then 
    set hashedpassword to user's entered password then password will reset.
    **/

    resetPassService(resetData) {
        let hashedPassword = utility.encryptPassword(resetData.password);
        return new Promise((resolve, reject) => {

            let searchById = {
                _id: resetData._id
            };
            let updateData = {
                password: hashedPassword
            };
            userModel.update(searchById, updateData)
                .then(data => {
                    resolve(data);

                }).catch(error => {
                    reject(error);
                });
        });
    }

    //**************************verifyEmail********************/

    /**
    @description- after registration mail in user's mail'id clicking on that user will be verified
    and the value will be replaced false to true after login
     **/
    async verifyEmailService(userId) {
        try {

            let searchById = { _id: userId };
            let updateData = { isVerify: true };

            let updateResult = await userModel.update(searchById, updateData);

            if (updateResult == "updated") {
                return true;
            } else {
                return false;
            }

        } catch (error) {
        }
    }

    async uploadService(uploadData) {
        console.log("upload", uploadData);

        try {
            let searchBy = {
                "_id": uploadData.id
            };
            let updateData = {
                "imageUrl": uploadData.url
            };
            let upload = await userModel.update(searchBy, updateData);
            if (upload == "updated") {
                return true;
            } else {
                return false;
            }

        } catch (error) {
        }

    }
}
const serviceObject = new Service();
module.exports = serviceObject;