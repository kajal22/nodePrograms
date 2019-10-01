
/*************************************************************************

* Purpose          : fundoo
* @file            : userRoutes.js
* @author          : kajal choudhary
* @version         : 1.0
* @since           : 25-09-2019
* 
**************************************************************************/


const express = require('express')
const router = express.Router()
const userControl = require('../controller/userControl')
const utility=require('../../backEnd/utility')
/**
  @description-  router to controller through require file that is api of registration
 **/
router.post('/registration',userControl.registrationControl)
/**
  @description-  router to controller through require file that is api of login
 **/
router.post('/login',userControl.loginControl)
/**
  @description- router to controller through require file that is api of forgetPassword
 **/
router.post('/forgetPassword',userControl.forgetPassControl)
/**
  @description-  router to controller through require file that is api of resetPassword
 **/
router.post('/resetPassword',utility.verifyToken,userControl.resetPassControl)
/**
  @description- router to controller through require file that is api of verifyRegistration
 **/
router.post('/verifyRegistration',utility.verifyToken,userControl.verifyEmail)

module.exports = router