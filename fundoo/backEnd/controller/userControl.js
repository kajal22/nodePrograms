
/*************************************************************************

* Purpose          : fundoo
* @file            : userControl.js
* @author          : kajal choudhary
* @version         : 1.0
* @since           : 25-09-2019
* 
**************************************************************************/



const userService = require('../services/userService')

class Controller {
    registrationControl(req, res) {
        try {
            //validations are performed here for names,email and password 

            req.check('firstName', 'firstName should be string format').isAlpha()
            req.check('firstName', 'firstName should not empty').notEmpty()
            req.check('lastName', 'lastName should be string format').isAlpha()
            req.check('lastName', 'lastName should not empty').notEmpty()
            req.check('loginType', 'loginType should be string').isAlpha()
            req.check('loginType', 'loginType should not empty').notEmpty()
            req.check('email', 'email should be string format').isEmail()
            req.check('email', 'lastName should not empty').notEmpty()
            req.check('password', 'password should not empty').notEmpty()
            req.check('password', 'password of minimum length ').isLength({ min: 5 })
            req.check('password', 'password of maximum length ').isLength({ max: 10 })

            let error = req.validationErrors()
            let response = {}
            if (error) {
                response.success = false
                response.message = "error while validation"
                response.error = error
                return res.status(422).send(response)
            }
            else {
                //take firstname,lastName,email and password in body

                let userData = {
                    "firstName": req.body.firstName,
                    "lastName": req.body.lastName,
                    "email": req.body.email,
                    "loginType": req.body.loginType,
                    "password": req.body.password
                }

                userService.registrationService(userData)
                    .then((data) => {
                        response.success = true
                        response.message = 'REGISTERED SUCESSFULLY!'
                        return res.status(200).send(response)
                    })
                    .catch((error) => {
                        console.log("errorrbtgtryhrt")
                        response.success = false
                        response.message = 'email Already exist';
                        response.error = error
                        return res.status(400).send(response)
                    })
            }
        } catch (err) {
            console.log(err)
        }
    }
    //******************logincontrolller*************/
    loginControl(req, res) {

        try {
            req.check('email', 'email should be string format').isEmail()
            req.check('email', 'lastName should not empty').notEmpty()
            req.check('password', 'password should not empty').notEmpty()
            req.check('password', 'password of minimum length ').isLength({ min: 5 })
            req.check('password', 'password of maximum length ').isLength({ max: 10 })

            let error = req.validationErrors()
            let response = {}
            if (error) {
                response.success = false
                response.message = "error while validation"
                response.error = error
                return res.status(422).send(response)
            }
            else {
                //take firstname,lastName,email and password in body
                let loginData = {
                    "email": req.body.email,
                    "password": req.body.password
                }

                userService.loginService(loginData)
                    .then(data => {
                        response.success = true
                        response.message = 'LOGIN SUCESSFULLY!'
                        return res.status(200).send(response)
                    })
                    .catch(error => {
                        response.success = false
                        response.message = 'Login Failed';
                        response.error = error
                        return res.status(400).send(response)
                    })
            }
        } catch (err) {
            console.log(err)
        }
    }
    /************forgetControl*************/
    forgetPassControl(req, res) {
        try {

            req.check('email', 'email should be string format').isEmail()
            req.check('email', 'lastName should not empty').notEmpty()


            let error = req.validationErrors()
            let response = {}
            if (error) {
                response.success = false
                response.message = "error while validation"
                response.error = error
                return res.status(422).send(response)
            }
            else {
                //take firstname,lastName,email and password in body
                let forgetData = {
                    "email": req.body.email
                }
                userService.forgetPassService(forgetData)
                    .then(data => {
                        response.success = true
                        response.message = 'EMAIL SENT SUCESSFULLY!'
                        return res.status(200).send(response)
                    })
                    .catch(error => {
                        response.success = false
                        response.message = 'email not exist';
                        response.error = error
                        return res.status(400).send(response)
                    })
            }
        } catch (err) {
            console.log(err)
        }
    }
    /******************resetControl************/
    resetPassControl(req, res) {
        try {
            req.check('password', 'password should not empty').notEmpty()
            req.check('password', 'password of minimum length ').isLength({ min: 5 })
            req.check('password', 'password of maximum length ').isLength({ max: 10 })
            let error = req.validationErrors()
            let response = {}

            if (error) {
                response.success = false
                response.message = 'error while validation'
                response.error = error
                return res.status(422).send(response)
            }
            else {
                let resetData = {
                    '_id': req.body.id,
                    'password': req.body.password
                }

                userService.resetPassService(resetData)
                    .then(data => {
                        response.success = true
                        response.message = "updated successfully"
                        response.data = data
                        return res.status(200).send(response)
                    })
                    .catch(error => {
                        response.success = false
                        response.message = 'ERROR OCCURED';
                        response.error = error
                        return res.status(400).send(response)
                    })
            }

        } catch (err) {
            console.log(err)
        }
    }
    //*****************verifytoken********/
    verifyTokenControl(req, res) {
        try {
            let response = {};

            userService.verifyTokenService(req.body)
                .then(data => {
                    response.success = true
                    response.message = "verified successfully"
                    response.data = data
                    return res.status(200).send(response)
                })
                .catch(error => {
                    response.success = false
                    response.message = 'ERROR OCCURED';
                    response.error = error
                    return res.status(400).send(response)
                })


        } catch (err) {
            console.log(err);

        }
    }
}
const controlObject = new Controller()
module.exports = controlObject;