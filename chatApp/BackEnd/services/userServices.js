
/*************************************************************************

* Purpose          : chatApp
* @file            : services.js
* @author          : kajal choudhary
* @version         : 1.0
* @since           : 5-09-2019
* 
**************************************************************************/
const model = require('../model/userModel')
class Service{


registrationService(userData, callback){
    const model = require('../model/userModel')
    try {
        model.registrationModel(userData, (err, data) => {
            if (err) {
                callback(err)
            }
            else {

                callback(null, data)
            }
        })
    } catch (err) {
        console.log(err)
    }
}
/*********************/
loginService(loginData, callback){
    const model = require('../model/userModel')
    try {
        model.loginModel(loginData, (err, data) => {

            if (err) {
                callback(err)
            }
            else {

                callback(null, data)
            }
        })
    } catch (err) {
        console.log(err)
    }
}
/**************/

forgetService (forgetData, callback){
    
    try {
        model.forgetModel(forgetData, (err, data) => {

            if (err) {
                callback(err)
            }
            else {

                callback(null, data)
            }
        })
    } catch (err) {
        console.log(err)
    }
}

//***********/
resetService(resetData, callback){
    const model = require('../model/userModel')
    try {
        model.resetModel(resetData, (err, data) => {

            if (err) {
                callback(err)
            }
            else {
                // get the data of data(from model of data) pass to local storage in front
                callback(null, data)
            }
        })
    } catch (err) {
        console.log(err)
    }
}


/***********modified*******/
getListDataService (callback) {
    const model = require('../model/userModel')
    try {
        model.getListDataModel((err, data) => {

            if (err) {
                return callback(err)
            }
            else {
                // get the data of data(from model of data) pass to local storage in front
                console.log("i am in services");

                return callback(null, data)
            }
        })
    } catch (err) {
        console.log(err)
    }
}

}
const serviceObject=new Service()
 module.exports=serviceObject
