const jwt = require('jsonwebtoken');

module.exports = {
verifyToken(req,res,next){

    let token = req.headers.token;

    console.log("header====",token)

    if (token) {
        jwt.verify(token, 'secret', (err, data) => {
            if (err) {

                res.status(400).send(" Token has expired !!!")
            } else {
              
                req.body.id = data._id;
                console.log(req.body.id)
                console.log("token got")
                next();
            }

        })

    } else {
        console.log("token not got");
        res.status(400).send(" Token not got")
    }
}
}