
/*************************************************************************

* Purpose          : fundoo
* @file            : userModel.js
* @author          : kajal choudhary
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
        require: [true, "email should be string"]
    },
    loginType: {
        type: String,
        require: [true, "should be string"]
    },
    password: {
        type: String,
        require: [true, "password should be string"]
    },
},
    {
        timestamps: true
    });


class UserClass {

    constructor() {
        this.newUser = mongoose.model('registrations', registerSchema)
    }

findEmail(findEmail){
    return new Promise((resolve, reject) => {
    this.newUser.find({'email':findEmail},this.newUser.email)
    .then((data)=>{
        if(data.length>0)
        {
            reject({"message":'email already registered'})
        }else{
            resolve(data)
        }

    }).catch((err)=>{
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
                    resolve({"data":data})
                })
                .catch(error => {
                    console.log("error is")
                    reject(error)
                })
        })
    }


/******loginmodel*********/
}
const modelObject = new UserClass()
module.exports = modelObject