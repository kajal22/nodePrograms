
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

router.post('/registration',control.registrationControl)
router.post('/login',control.loginControl)
router.post('/forgetPassword',control.forgetControl)
router.post('/resetPassword',tokenVerify.verifyToken,control.resetControl)

module.exports=router
