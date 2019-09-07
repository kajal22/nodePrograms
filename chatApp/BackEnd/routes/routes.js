const express = require('express')
const router =express.Router()

const control=require('../controller/controller')
router.post('/Registration',control.registrationControl)
router.post('/Login',control.loginControl)
router.post('/ForgetPassword',control.forgetControl)

module.exports=router
