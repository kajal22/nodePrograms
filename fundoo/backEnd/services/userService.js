
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
class Service {


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
loginService(loginData){
    return new Promise((resolve, reject) => {
    userModel.findEmail(loginData.email)
    bcrypt.compare(loginData.password, data[0].password)  
    .then(data => {
        console.log("\n\n\t\tLOGIN SUCCESSFULL !");
        resolve(data)
    })
    .catch(error => {
        console.log("error in catch")
        reject(error)
    }) 
    })
}
}
const serviceObject = new Service()
module.exports = serviceObject