exports.registrationControl=(req,res)=>{
  

req.checkBody('firstName','firstName should be string format').isAlpha()
req.checkBody('firstName','firstName should not empty').notEmpty()
req.checkBody('lastName','lastName should be string format').isAlpha()
req.checkBody('lastName','lastName should not be string').notEmpty()
req.checkBody('email','email should not be empty').notEmpty()
req.checkBody('email','email should be in format ').isEmail()
req.checkBody('lastName','password should not empty').notEmpty()
req.checkBody('password','password of minimum length ').isLength({min:5})
req.checkBody('password','password of maximum length ').isLength({max:10})
let error= req.validationErrors()
let response={}

if(error)
{
    response.success=false
    return res.status(422).send("entered invalid inputs")
}


// if(!req.body)
// {
//     return res.status(400).send({
//         messege: 'registration is empty'
//     })
// }

else 
{
  const service=require('../services/services')
  let userData={
  firstName:req.body.firstName,
  lastName:req.body.lastName,
  email:req.body.email,
  password:req.body.password,
}


// the userdata will send to services
service.registrationService(userData,(err,data)=>{

    if(err){
        return res.status(400).send(err)
    }
    else{
       
        return res.status(400).send("Registration successfull.")
    }
})
}
}

/******************************/
exports.loginControl=(req,res)=>{
    req.checkBody('email','email should not be empty').notEmpty()
    req.checkBody('email','email should be in format ').isEmail()
  
    req.checkBody('password','password of minimum length ').isLength({min:5})
    req.checkBody('password','password of maximum length ').isLength({max:10})

    let error= req.validationErrors()
    let response={}
    
    if(error)
    {
        response.success=false
        return res.status(422).send("entered invalid inputs")
    }
    else 
    {

      const service=require('../services/services')
      let loginData={
      
      email:req.body.email,
      password:req.body.password,
    }
    
    
    // the userdata will send to services
    service.loginService(loginData,(err,data)=>{
    
        if(err){
            return res.status(400).send(err)
        }
        else{
           
            return res.status(400).send("Login successfull.")
        }
    })
    }
    }
    //***************/
    exports.forgetControl=(req,res)=>{
        req.checkBody('email','email should not be empty').notEmpty()
        req.checkBody('email','email should be in format ').isEmail()
      
    
        let error= req.validationErrors()
        let response={}

    
        if(error)
        {
            response.success=false
            return res.status(422).send("entered invalid inputs")
        }
        else 
        {
    
          const service=require('../services/services')
          let forgetData={
          
          email:req.body.email,
      
        }
        
        
        // the userdata will send to services
        service.forgetService(forgetData,(err,data)=>{
        
            if(err){
                return res.status(400).send(err)
            }
            else{
               
                return res.status(400).send("sent successfully.")
            }
        })
        }
        }