const AWS = require('aws-sdk');
require('dotenv').config();

const s3Client = new AWS.S3({
    accessKeyId: process.env.ACCESSKEY,
    secretAccessKey: process.env.SECRETKEY,

});

module.exports = s3Client;