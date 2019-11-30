const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const redisUtility = require("./services/redisService");
var underscore = require("underscore");
class UtilityClass {

    paginatingNote(redisData, pageNo) {
        return new Promise((resolve, reject) => {
            var pagePartition = underscore.chunk(redisData, 2);
            if (pageNo == undefined || pageNo == 1) {
                resolve(pagePartition[0]);
            } else {
                resolve(pagePartition[pageNo - 1]);
            }
        });
    }


    verifyToken(req, res, next) {
        try {
            let token = req.headers.token;
            if (token) {

                jwt.verify(token, "secret", (err, data) => {

                    if (err) {
                        res.status(400).send(" Token has expired !!!");
                    } else {
                        redisUtility.redisGet(data._id + "newTokenSet", (err, getToken) => {
                            console.log("get token", getToken, "ghghhkjkjkj", token);

                            if (getToken === token) {
                                console.log(" matched");
                                req.token = data;
                                next();
                            } else {
                                res.status(400).send(" Token not matched");
                            }
                        });
                    }
                });
            } else {
                console.log("token not got");
                res.status(400).send(" Token not got");
            }
        } catch (err) {
            res.status(400).send(err);
        }
    }

    emailVerify(req, res, next) {
        try {
            let token = req.headers.token;
            if (token) {

                jwt.verify(token, "secret", (err, data) => {

                    if (err) {
                        res.status(400).send(" Token has expired !!!");
                    } else {
                        redisUtility.redisGet(data._id + "setVerify", (err, getToken) => {

                            if (getToken === token) {
                                req.token = data;
                                next();
                            } else {
                                res.status(400).send(" Token not matched");
                            }
                        });
                    }
                });
            } else {
                console.log("token not got");
                res.status(400).send(" Token not got");
            }
        } catch (err) {
            res.status(400).send(err);
        }
    }


    resetVerify(req, res, next) {
        try {
            let token = req.headers.token;
            if (token) {

                jwt.verify(token, "secret", (err, data) => {

                    if (err) {
                        res.status(400).send(" Token has expired !!!");
                    } else {
                        redisUtility.redisGet(data._id + "resetVerify", (err, getToken) => {

                            if (getToken === token) {
                                console.log("not matched");

                                req.token = data;
                                next();
                            } else {
                                res.status(400).send(" Token not matched");
                            }
                        });
                    }
                });
            } else {
                console.log("token not got");
                res.status(400).send(" Token not got");
            }
        } catch (err) {
            res.status(400).send(err);
        }
    }












    encryptPassword(password) {
        let saltRounds = 10;
        let salt = bcrypt.genSaltSync(saltRounds);
        let encryptPassword = bcrypt.hashSync(password, salt);
        return encryptPassword;
    }



    generateToken(payload) {
        let token = jwt.sign(payload, "secret", { expiresIn: "8hr" });
        return token;
    }
}

const utilityObject = new UtilityClass();
module.exports = utilityObject;