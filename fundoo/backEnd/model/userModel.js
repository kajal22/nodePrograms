
/*************************************************************************

* Purpose          : fundoo
* @file            : userModel.js
* @author          :  choudhary
* @version         : 1.0
* @since           : 25-09-2019
* 
**************************************************************************/


const mongoose = require('mongoose')

let registerSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: [true, "firstName should be string"]
    },
    lastName: {
        type: String,
        require: [true, "lastName should be string"]
    },
    email: {
        type: String,
        require: [true, "should be string"]
    },
    loginType: {
        type: String,
        require: [true, "should be string"]
    },
    password: {
        type: String,
        require: [true, "password should be string"]
    },
    token: {
        type: String,
    },
    isVerify: {
        type: Boolean,
    },
},
    {
        timestamps: true
    });


class UserClass {

    constructor() {
        this.newUser = mongoose.model('registrations', registerSchema)
    }

    findEmail(findEmail) {
        return new Promise((resolve, reject) => {
            this.newUser.find({ 'email': findEmail }, this.newUser.email)
                .then((data) => {
                    if (data.length > 0) {
                        resolve(data)
                    } else {
                        resolve()
                    }

                }).catch((err) => {
                    reject(err)
                })
        })
    }

    //registered users data will be saved in database

    registrationSaveUser(userData) {
        console.log(userData, "USERDATA   ");

        return new Promise((resolve, reject) => {
            let user = new this.newUser({
                "firstName": userData.firstName,
                "lastName": userData.lastName,
                "email": userData.email,
                "loginType": userData.loginType,
                "password": userData.password,
                "isVerify": false
            });
            user.save()
                .then(data => {
                    resolve(data)
                })
                .catch(error => {
                    console.log("error")
                    reject(error)
                })
        })
    }


    /******loginmodel*********/


    //find email that should be present in database

    searchEmail(findEmail) {
        return new Promise((resolve, reject) => {
            this.newUser.find({ 'email': findEmail })
                .then((data) => {
                    if (data.length > 0) {
                        resolve(data)
                    } else {
                        resolve(data)
                    }
                }).catch((err) => {
                    console.log("error in model");
                    reject(err)
                })
        })
    }

    searchEmailVerification(id) {

        return new Promise((resolve, reject) => {
            this.newUser.find({ '_id': id, "isVerify": true })
                .then((data) => {
                    if (data.length > 0) {
                        resolve(data)
                    } else {
                        reject("verification not done")
                    }
                }).catch((err) => {
                    reject(err)
                })
        })
    }
    //save token while login in database 

    saveToken(newToken, data) {
        return new Promise((resolve, reject) => {
            this.newUser.updateOne({ _id: data._id }, { $set: { token: newToken } })

                .then(response => {
                    console.log("updated the data ")
                    console.log("updated count ", response)
                    let dataObject = {
                        "firstName": data.firstName,
                        "lastName": data.lastName,
                        "email": data.email,
                        "loginType": data.loginType,
                        "token": newToken
                    }
                    resolve(dataObject)
                }).catch(error => {
                    console.log("error")
                    reject(error)
                })
        })
    }


    /**************resetModel*************/

    //replace old password by new pew hashed password set that and update in database

    resetPassword(id, hashedPassword) {
        return new Promise((resolve, reject) => {
            this.newUser.updateOne({ _id: id }, { $set: { password: hashedPassword } })
                .then(data => {
                    console.log("updated password");
                    resolve("updated password")
                })
                .catch(error => {
                    console.log("error")
                    reject(error)
                })
        })
    }



    async  updateDocument(id, statuValue) {

        try {

            let updateResult = await this.newUser.updateOne({ _id: id }, { $set: { isVerify: statuValue } })
            console.log("\n\nUpdate result ", updateResult);

            if (updateResult.nModified == 1) {
                console.log("\n\nemail verified succesfully !");
                return true
            }
            else // user not found 
            {
                return false
            }

        } catch (error) {
            console.log(error);

        }

    }


}
const modelObject = new UserClass()
module.exports = modelObject