
/*************************************************************************

* Purpose          : fundoo
* @file            : userRoutes.js
* @author          : kajal choudhary
* @version         : 1.0
* @since           : 25-09-2019
* 
**************************************************************************/


const express = require("express");
const router = express.Router();
const userControl = require("../controller/userControl");
const utility=require("../../backEnd/utility");
const multer=require("../config/multer");
const labelControl=require("../controller/labelControl")
const noteControl=require("../controller/noteControl")
router.post("/registration",userControl.registrationControl);

router.post("/login",userControl.loginControl);

router.post("/forgetPassword",userControl.forgetPassControl);

router.post("/resetPassword",utility.verifyToken,userControl.resetPassControl);

router.post("/verifyRegistration",utility.verifyToken,userControl.verifyEmail);

router.post("/upload",utility.verifyToken,multer.single('file'),userControl.uploadControl)

/****create label api****/
router.post("/createLabel",utility.verifyToken,labelControl.createLabelController);

router.post("/updateLabel",utility.verifyToken,labelControl.updateLabelController);

router.post("/deleteLabel",utility.verifyToken,labelControl.deleteLabelController);

router.get("/getAllLabel",utility.verifyToken,labelControl.getAllLabelController)

/****create Note api******/
router.post("/createNote",utility.verifyToken,noteControl.createNoteControl)

router.post("/deleteNote",utility.verifyToken,noteControl.deleteNoteControl)

router.post("/updateNote",utility.verifyToken,noteControl.updateNoteControl)

router.post("/getAllNote",utility.verifyToken,noteControl.getAllNoteControl)



module.exports = router; 