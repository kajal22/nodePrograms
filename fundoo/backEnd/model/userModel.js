
/*************************************************************************

* Purpose          : fundoo
* @file            : userModel.js
* @author          :  choudhary
* @version         : 1.0
* @since           : 25-09-2019
* 
**************************************************************************/


const mongoose = require("mongoose");

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
        // require: [true, "should be string"]
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
    imageUrl: {
        type: String
    },
},
    {
        timestamps: true
    });


class UserClass {

    constructor() {
        this.newUser = mongoose.model("registrations", registerSchema);
    }
    /**
     * method used for create document and save the data in database.
     *@param {object} userData  
     */
  

    create(userData) {
        return new Promise((resolve, reject) => {
            let user = new this.newUser({
                "firstName": userData.firstName,
                "lastName": userData.lastName,
                "email": userData.email,
                // "loginType": userData.loginType,
                "password": userData.password,
                "isVerify": false
            });
            user.save()
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
     /**
      * search for a particular user
      * @param {object} search 
      */
    read(search) {
        return new Promise((resolve, reject) => {
            
            this.newUser.find(search)
                .then((data) => {
                    if (data.length > 0) {

                        resolve(data);
                    } else {
                        resolve();
                    }

                }).catch((err) => {
                    reject(err);
                });
        });
    }

/**
 * searchBy searching a particular user and update by using updateData
 * @param {object} searchBy 
 * @param {object} updateData 
 */
    update(searchBy, updateData) {
        return new Promise((resolve, reject) => {
            this.newUser.updateOne(searchBy, { $set: updateData })
                .then(response => {
                    resolve("updated");
                }).catch(error => {
                    reject("error");
                });
        });
    }




}
const modelObject = new UserClass();
module.exports = modelObject;