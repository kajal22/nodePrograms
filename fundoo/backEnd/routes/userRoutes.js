
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
router.post('/registration',userControl.registrationControl)

router.post('/login',userControl.loginControl)

router.post('/forgetPassword',userControl.forgetPassControl)

router.post('/resetPassword',utility.verifyToken,userControl.resetPassControl)

// router.post('/verifyRegistration',utility.verifyToken,userControl.verifyTokenControl)

router.post('/verifyRegistration',utility.verifyToken,userControl.verifyEmail)

module.exports = router