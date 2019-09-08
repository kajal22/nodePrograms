
/*************************************************************************

* Purpose          : chatApp
* @file            : routes.js
* @author          : kajal choudhary
* @version         : 1.0
* @since           : 5-09-2019
* 
**************************************************************************/



const express = require('express')
const router =express.Router()
const tokenVerify=require('../../middleWare/tokengenrate')
const control=require('../controller/controller')

router.post('/Registration',control.registrationControl)
router.post('/Login',control.loginControl)
router.post('/ForgetPassword',control.forgetControl)
router.post('/ResetPassword',tokenVerify.verifyToken,control.resetControl)

module.exports=router
