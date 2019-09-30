const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
class UtilityClass {
    verifyToken(req, res, next) {
        try {
            let token = req.headers.token;
            if (token) {
                jwt.verify(token, 'secret', (err, data) => {
                    if (err) {
                        res.status(400).send(" Token has expired !!!")
                    } else {
                        req.body.id = data._id;
                        console.log("token got")
                        next();
                    }
                })

            } else {
                console.log("token not got");
                res.status(400).send(" Token not got")
            }
        } catch (err) {
            console.log(err);
        }
    }
    encryptPassword(password) {
        let saltRounds = 10
        let salt = bcrypt.genSaltSync(saltRounds)
        let encryptPassword = bcrypt.hashSync(password, salt)
        return encryptPassword;
    }


    generateToken(payload) {
        let token = jwt.sign(payload, 'secret', { expiresIn: '6hr' })
        return token;
    }
}
const utilityObject = new UtilityClass()
module.exports = utilityObject