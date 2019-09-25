
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
console.log("routes")
router.post('/registration', userControl.registrationControl)
router.post('/login',userControl.loginControl)


module.exports = router