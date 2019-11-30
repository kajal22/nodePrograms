
/*************************************************************************

* Purpose          : fundoo
* @file            : userControl.js
* @author          : kajal choudhary
* @version         : 1.0
* @since           : 25-09-2019
* 
**************************************************************************/



const userService = require("../services/userService");
const s3 = require("../services/s3Service");

class Controller {
    /**
    * 
    * @param {object} req user request 
    * @param {object} res response from server
    */
    registrationControl(req, res) {
        
        try {
            /******take firstname,lastName,email and password in body******/

            req.checkBody("firstName", "firstName should be string format").isAlpha();
            req.checkBody("firstName", "firstName should not empty").notEmpty();
            req.checkBody("lastName", "lastName should be string format").isAlpha();
            req.checkBody("lastName", "lastName should not empty").notEmpty();
            req.checkBody("email", "email should be string format").isEmail();
            req.checkBody("email", "lastName should not empty").notEmpty();
            req.checkBody("password", "password should not empty").notEmpty();
            req.checkBody("password", "password of minimum length ").isLength({ min: 5 });
            req.checkBody("password", "password of maximum length ").isLength({ max: 10 });

            let error = req.validationErrors();
            
            let response = {};
            if (error) {
                response.success = false;
                response.message = "error while validation";
                response.error = error;
                return res.status(422).send(response);
            }
            else {
                /******take firstname,lastName,email and password in body******/

                let userData = {
                    "firstName": req.body.firstName,
                    "lastName": req.body.lastName,
                    "email": req.body.email,
                    "password": req.body.password
                };
                
                userService.registrationService(userData)
                    .then((data) => {
                        response.success = true;
                        response.message = "REGISTERED SUCESSFULLY!";
                        response.data = data;
                        return res.status(200).send(response);
                    })
                    .catch((error) => {
                        response.success = false;
                        response.message = "email Already exist";
                        response.error = error;
                        return res.status(400).send(response);
                    });
            }
        } catch (err) { 
            return res.status(400).send(err);
        }
    }
    //************************logincontrolller*********************************/
    /**
    * 
    * @param {object} req user request 
    * @param {object} res response from server
    */
    loginControl(req, res) {

        try {
            req.checkBody("email", "email should be string format").isEmail();
            req.checkBody("email", "lastName should not empty").notEmpty();
            req.checkBody("password", "password should not empty").notEmpty();
            req.checkBody("password", "password of minimum length").isLength({ min: 5 });
            req.checkBody("password", "password of maximum length").isLength({ max: 10 });

            let error = req.validationErrors();
            let response = {};
            if (error) {
                response.success = false;
                response.message = "error while validation";
                response.error = error;
                return res.status(422).send(response);
            }
            else {
                /******take firstname,lastName,email and password in body******/
                let loginData = {
                    "email": req.body.email,
                    "password": req.body.password
                };

                userService.loginService(loginData)
                    .then(data => {
                        response.success = true;
                        response.message = "LOGIN SUCESSFULLY!";
                        response.data = data;
                        return res.status(200).send(response);
                    })
                    .catch(error => {
                        response.success = false;
                        response.error = error;
                        return res.status(400).send(response);
                    });
            }
        } catch (err) {
            return res.status(400).send(err);
        }
    }
    /**************************forgetControl***********************/
    /**
    * 
    * @param {object} req user request 
    * @param {object} response from server
    */
    forgetPassControl(req, res) {
        try {

            req.checkBody("email", "email should be string format").isEmail();
            req.checkBody("email", "lastName should not empty").notEmpty();


            let error = req.validationErrors();
            let response = {};
            if (error) {
                response.success = false;
                response.message = "error while validation";
                response.error = error;
                return res.status(422).send(response);
            }
            else {
                /******take firstname,lastName,email and password in body******/
                let forgetData = {
                    "email": req.body.email
                };
                userService.forgetPassService(forgetData)
                    .then(data => {
                        response.success = true;
                        response.message = "EMAIL SENT SUCESSFULLY!";
                        response.data = data;
                        return res.status(200).send(response);
                    })
                    .catch(error => {
                        response.success = false;
                        response.message = "email not exist";
                        response.error = error;
                        return res.status(400).send(response);
                    });
            }
        } catch (err) {
            return res.status(400).send(err);
        }
    }
    /*************************resetControl******************************/
    /**
    * 
    * @param {object} req user request 
    * @param {object} res response from server
    */
    resetPassControl(req, res) {
        try {
            req.checkBody("password", "password should not empty").notEmpty();
            req.checkBody("password", "password of minimum length").isLength({ min: 5 });
            req.checkBody("password", "password of maximum length").isLength({ max: 10 });
            let error = req.validationErrors();
            let response = {};

            if (error) {
                response.success = false;
                response.message = "error while validation";
                response.error = error;
                return res.status(422).send(response);
            }
            else {
                let resetData = {
                    "_id": req.token._id,
                    "password": req.body.password
                };

                userService.resetPassService(resetData)
                    .then(data => {
                        response.success = true;
                        response.message = "updated successfully";
                        response.data = data;
                        return res.status(200).send(response);
                    })
                    .catch(error => {
                        response.success = false;
                        response.message = "ERROR OCCURED";
                        response.error = error;
                        return res.status(400).send(response);
                    });
            }

        } catch (err) {
            return res.status(400).send(err);
        }
    }
    /****************************verifytoken*****************************/

    /**
    * 
    * @param {object} req user request 
    * @param {object} res response from server
    */
    async verifyEmail(req, res) {
        try {
            let response = {};
            let verifyResult = await userService.verifyEmailService(req.token._id);

            if (verifyResult) {
                response.success = true;
                response.message = "verified successfully";
                response.data = verifyResult;
                return res.status(200).send(response);

            } else {
                response.success = false;
                response.message = "ERROR OCCURED";
                response.error = error;

                return res.status(400).send(response);
            }

        } catch (err) {
            return res.status(400).send(err);

        }
    }
    /**
    * 
    * @param {object} req user request 
    * @param {object} res response from server
    */
    async uploadControl(request) {
        
        let response = {};
        try {
           
                // const s3url = await s3.getSignedUrl("getObject", { Bucket: process.env.BUCKET, Key: req.file.originalname });
                let uploadFile = {
                    "id": request._id,
                    "url":request.s3url
                };
        
                let fileUploadResponse = await userService.uploadService(uploadFile);
                let response = {};
                if (fileUploadResponse) {
                    response.success = true;
                    response.message = "uploaded successfully";
                    response.data = fileUploadResponse;

                    return (response);
                } else {
                    response.success = false;
                    response.message = "ERROR OCCURED SUCCESSFULLY";
                    response.error = fileUploadResponse;

                    return(response);

                }
            // }

        } catch (err) {
            return (err);
        }
    }
}
const controlObject = new Controller();
module.exports = controlObject;