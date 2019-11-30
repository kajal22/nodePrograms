
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
const utility=require("../utility");
const multer=require("../services/multerService");
const labelControl=require("../controller/labelControl");
const noteControl=require("../controller/noteControl");


const upload = require("../services/multerService");
const singleUpload = upload.single("file");

router.post("/registration",userControl.registrationControl);
router.post("/login",userControl.loginControl);
router.post("/forgetPassword",userControl.forgetPassControl);
router.post("/resetPassword",utility.resetVerify,userControl.resetPassControl);
router.post("/verifyRegistration",utility.emailVerify,userControl.verifyEmail);

router.post("/upload", utility.verifyToken, (req, res) => {
    let request={};
    request._id = req.token._id;
    singleUpload(req, res, async (err, data) => {
    if (err) {
    return res.status(422).send({ errors: err });
    } else {
    console.log("data: ", data);
    request.s3url=req.file.location;
    let result = await userControl.uploadControl(request);
    
    if (result.success) {
    return res.json({"success":true,"message":"Image uploaded sucessfully !", "imgUrl": req.file.location });
    }
    else {
    return res.json({
    "success": false,
    "message": "Image upload Fail"
    });
    }
    }
    });
    });

/****create label api****/
router.post("/createLabel",utility.verifyToken,labelControl.create);
router.put("/updateLabel",utility.verifyToken,labelControl.update);
router.post("/deleteLabel",utility.verifyToken,labelControl.delete);
router.get("/getAllLabel",utility.verifyToken,labelControl.getAllLabelController);

/****create Note api******/
router.post("/createNote",utility.verifyToken,noteControl.create);
router.post("/deleteNote",utility.verifyToken,noteControl.delete);
router.put("/updateNote",utility.verifyToken,noteControl.update);
router.get("/getAllNote",utility.verifyToken,noteControl.getAll);
router.get("/searchNote",utility.verifyToken,noteControl.searchNoteControl);
router.post("/addLabelOnNote",utility.verifyToken,noteControl.addLabelOnNote);
router.post("/deleteLabelOnNote",utility.verifyToken,noteControl.deleteLabelOnNote);
router.post("/reminderNotifiaction",utility.verifyToken,noteControl.reminderNotify);

module.exports = router; 