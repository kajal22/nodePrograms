const multer = require("multer");
const multerS3 = require("multer-s3");
const s3 = require("../services/s3Service");
const path=require("path");

require("dotenv").config();
var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.BUCKET,
        key: (req, file, callback) => {
            var ext = path.extname(file.originalname);
        if(ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== ".jpeg") {
            return callback(new Error("Only images are allowed"));
        }
        callback(null, file.originalname);
            
            
        }
    })
});

module.exports = upload;