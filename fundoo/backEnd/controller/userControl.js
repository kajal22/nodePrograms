
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
            req.check('loginType','loginType should be string').isAlpha()
            req.check('loginType','loginType should not empty').notEmpty()
            req.check('email', 'email should be string format').isEmail()
            req.check('email', 'lastName should not empty').notEmpty()
            req.check('password', 'password should not empty').notEmpty()

            let error = req.validationErrors()
            let response = {}
            if (error) {
                response.success = false
                response.message = "error while validation"
                response.error = error
                return res.status(400).send(response)
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
                    .then(data => {
                        response.success = true
                        response.message = 'REGISTERED SUCESSFULLY!'
                        return res.status(200).send(response)
                    })
                    .catch(error => {
                        console.log("error")
                        response.success = false
                        response.message = 'email Already exist';
                        response.error=error
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
            req.check('loginType','loginType should be string').isAlpha()
            req.check('loginType','loginType should not empty').notEmpty()
            req.check('password', 'password should not empty').notEmpty()  

            let error = req.validationErrors()
            let response = {}
            if (error) {
                response.success = false
                response.message = "error while validation"
                response.error = error
                return res.status(400).send(response)
            }
            else {
                //take firstname,lastName,email and password in body
                let loginData = {
                    "email": req.body.email,
                    "loginType": req.body.loginType,
                    "password": req.body.password
                }
            
                userService.loginService(loginData) 
                 .then(data => {
                        response.success = true
                        response.message = 'LOGIN SUCESSFULLY!'
                        return res.status(200).send(response)
                    })
                    .catch(error => {
                        console.log("error")
                        response.success = false
                        response.message = 'email not exist';
                        response.error=error
                        return res.status(400).send(response)
                    })
            }
      }catch(err)
      {
          console.log(err)
      }
     }
}
const controlObject = new Controller()
module.exports = controlObject;