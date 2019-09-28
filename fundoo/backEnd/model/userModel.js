
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
    isVerify: {
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
                "password": userData.password
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
        console.log("got email", findEmail);
        return new Promise((resolve, reject) => {
            this.newUser.find({ 'email': findEmail }, ['_id', 'email', 'password'])
                .then((data) => {
                    console.log(" model", data)
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

    //save token while login in database 

    saveToken(newToken, data) {
        return new Promise((resolve, reject) => {
            this.newUser.updateOne({ _id: data._id }, { $set: { token: newToken } })
                .then(Response => {
                    console.log("updated the data")
                    console.log("updated count", Response)
                    resolve()
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

    updateStatus(id, statuValue) {
        return new Promise((resolve, reject) => {
            this.newUser.updateOne({ _id: id }, { $set: { isVerify: statuValue } })
                .then(data => {
                    console.log("updated status");
                    resolve("updated status")
                })
                .catch(error => {
                    console.log("error")
                    reject(error)
                })
        })
    }
}
const modelObject = new UserClass()
module.exports = modelObject