
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
                    console.log(data, "all data")
                    if (data.length > 0) {
                        reject({ "message": 'email already registered' })
                    } else {
                        resolve(data)
                    }

                }).catch((err) => {
                    console.log("error in model");

                    reject(err)
                })
        })
    }



    registrationSaveUser(userData) {

        return new Promise((resolve, reject) => {
            let user = new this.newUser({
                "firstName": userData.firstName,
                "lastName": userData.lastName,
                "email": userData.email,
                "loginType": userData.loginType,
                "password": userData.password
            });
            user.save()
                .then(data => {
                    resolve({ "data": data })
                })
                .catch(error => {
                    console.log("error is")
                    reject(error)
                })
        })
    }


    /******loginmodel*********/
    searchEmail(findEmail) {
        return new Promise((resolve, reject) => {
            this.newUser.find({ 'email': findEmail }, ['_id', 'email', 'password'])
                .then((data) => {
                    console.log(data, "in model")
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
    saveToken(newToken, data) {

        return new Promise((resolve, reject) => {
            this.newUser.updateOne({ _id: data._id }, { $set: { token: newToken } })
                .then(Response => {
                    console.log("updated the data")
                    console.log("updated count", Response)
                    resolve()
                }).catch(error => {
                    console.log("error in model")
                    reject(error)
                })
        })
    }

    /**************resetModel*************/
    resetPassword(id, hashedPassword) {
        return new Promise((resolve, reject) => {
            this.newUser.updateOne({ _id: id }, { $set: { password: hashedPassword } })
                .then(data => {
                    console.log("updated password")
                    resolve("updated password")
                })
                .catch(error => {
                    console.log("error ")
                    reject(error)
                })
        })
    }
}
const modelObject = new UserClass()
module.exports = modelObject