const jwt = require('jsonwebtoken');

exports.generateToken=(payload)=>
{
    
    let token = jwt.sign(payload , 'secret',{expiresIn:'2h' })
       
       return token; 
}

// verify the token



exports.verifyToken=(req,res,next)=>{

    let token=req.headers['token'];

    if(token){
        jwt.verify(token,'secret',(err,data)=>{
            if(err)
            {
                
                res.status(400).send(" Token has expired !!!please try again")
            }else{

                console.log("hello");
                
                 console.log(data)
    
                req.id=data.id;
                next();
            }
    
        })

    }else{
        console.log("token have not got");
        res.status(400).send(" Token have not got")
        
    }



    
}