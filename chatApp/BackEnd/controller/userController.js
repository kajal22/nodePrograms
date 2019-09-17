
/*************************************************************************

* Purpose          : chatApp
* @file            : controller.js
* @author          : kajal choudhary
* @version         : 1.0
* @since           : 5-09-2019
* 
**************************************************************************/


const service = require('../services/userServices')

class Controller{

registrationControl (req, res) {
    try {

        req.checkBody('firstName', 'firstName should be string format').isAlpha()
        req.checkBody('firstName', 'firstName should not empty').notEmpty()
        req.checkBody('lastName', 'lastName should be string format').isAlpha()
        req.checkBody('lastName', 'lastName should not be string').notEmpty()
        req.checkBody('email', 'email should not be empty').notEmpty()
        req.checkBody('email', 'email should be in format ').isEmail()
        req.checkBody('lastName', 'password should not empty').notEmpty()
        req.checkBody('password', 'password should not empty ').notEmpty()
        // req.checkBody('password','password of minimum length ').isLength({min:5})
        // req.checkBody('password','password of maximum length ').isLength({max:10})
        let error = req.validationErrors()
        let response = {}
        
        if(error) {
            response.success = false
            response.message='error while validation'
            response.error=error
            
            return res.status(422).send(response)
        }


        else {
            const service = require('../services/userServices')
            let userData = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
            }


            // the userdata will send to services
            service.registrationService(userData, (err, data) => {

                if (err) {
                    response.success=false
                    response.message='error while validation'
                    response.error=err
                    return res.status(422).send(response)
                }
                else {
                    response.success=true
                    response.message='Registration successfull!'
                    response.content=data
                    return res.status(200).send(response)
                }
            })
        }
    } catch (err) {
        console.log(err)
    }
}

/******************************/
loginControl (req, res)  {
    try {
        req.checkBody('email', 'email should not be empty').notEmpty()
        req.checkBody('email', 'email should be in format ').isEmail()
        req.checkBody('password', 'password should not empty ').notEmpty()
        // req.checkBody('password','password of minimum length ').isLength({min:5})
        // req.checkBody('password','password of maximum length ').isLength({max:10})

        let response = {}
        let error=req.validationErrors()
        
        if(error) {
            response.success = false
            response.message='error while validation'
            response.error=error
            
            return res.status(422).send(response)
        }
        else {

            const service = require('../services/userServices')
            let loginData = {

                email: req.body.email,
                password: req.body.password,
            }


            // the userdata will send to services
            service.loginService(loginData, (err, data) => {

                if (err) {
                    response.success=false
                    response.message='error while validation'
                    response.error=err
                    return res.status(422).send(response)
                }
                else {
                    response.success=true
                    response.message='Login successfull!'
                    response.content=data
                    return res.status(200).send(response)
                }
            })
        }
    } catch (err) {
        console.log(err)
    }
}
//***************/
forgetControl(req, res){
    req.checkBody('email', 'email should not be empty').notEmpty()
    req.checkBody('email', 'email should be in format ').isEmail()


    let error = req.validationErrors()
    let response = {}

    if(error) {
        response.success = false
        response.message='error while validation'
        response.error=error
        
        return res.status(400).send(response)
    }
    else {

        let forgetData = {

            email: req.body.email,

        }


        // the userdata will send to services
        service.forgetService(forgetData, (err, data) => {

            if (err) {
                response.success=false
                response.message='error while validation'
                response.error=err
                return res.status(422).send(response)
            }
            else {
                response.success=true
                response.message='sent mail successfull!'
                response.content=data
                return res.status(200).send(response)
            }
        })
    }
}

//***************/

resetControl  (req, res) {
    try {

        req.checkBody('password', 'password should not empty ').notEmpty()
        // req.checkBody('password','password of minimum length ').isLength({min:5})
        // req.checkBody('password','password of maximum length ').isLength({max:10})

        let error = req.validationErrors()
        let response = {}

        if (error) {
            response.success = false
            return res.status(422).send("entered invalid inputs")
        }
        else {

            const service = require('../services/userServices')

            console.log("hello");

            console.log("id is " + req.body.id);

            // pass the id and password 
            let resetData = {
                password: req.body.password,
                id: req.body.id,
            }

            // the userdata will send to services
            service.resetService(resetData, (err, data) => {

                if (err) {
                    return res.status(422).send(err)
                }
                else {

                    return res.status(200).send(data)
                }
            })
        }
    } catch (err) {
        console.log(err)
    }
}

/***********modified*******/
getListDataControl  (req, res)  {
    try {
        let error = req.validationErrors()
    let response = {}

    if(error) {
        response.success = false
        response.message='error while validation'
        response.error=error
    }
        else {

            const service = require('../services/userServices')

            console.log(" in controlller");

            // the userdata will send to services
            service.getListDataService((err, data) => {

                if (err) {
                    response.success=false
                    response.message='error while validation'
                    response.error=err
                    return res.status(422).send(response)
                }
                else {
                    response.success=true
                    response.message='reset password successfull!'
                    response.content=data
                    return res.status(200).send(response)
                }
            })
        }
    } catch (err) {
        console.log(err)
    }
}
}


const controlobject=new Controller()
module.exports=controlobject;
