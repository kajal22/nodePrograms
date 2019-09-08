exports.generateToken=(email)=>
{
    let jwt = require('jsonwebtoken')
    let token = jwt.sign({'email':email},
        'secret',{expiresIn:2 })
       
       return token; 
}

// verify the token







exports.verifyToken=(req,res,next)=>{

    let token=req.headers['token'];

    if(token){
        jwt.verify(token,'privateKey',(err,decoded)=>{
            if(err)
            {
                res.status(400).send(" Token has expired")
            }else{
                console.log("token "+JSON.stringify(decoded));
                req.decoded=decoded;
                next();
            }
    
        })

    }else{
        console.log("token not got");
        res.status(400).send(" Token not got")
        
    }



    
}