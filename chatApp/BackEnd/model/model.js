
/*************************************************************************

* Purpose          : chatApp
* @file            : model.js
* @author          : kajal choudhary
* @version         : 1.0
* @since           : 5-09-2019
* 
**************************************************************************/




const bcrypt = require('bcrypt');
const mongoose =require('mongoose')
let tokenGenrator=require('../../middleWare/tokengenrate')
let nodeMail=require('../../middleWare/nodemailer')
   
const Schema = mongoose.Schema;
// create a schema 
let registrationSchema= new Schema({
   
       firstName : String,
       lastName : String,
       email : String,
       password : String
    },
    {
//    timestamp:true
   });
let model = mongoose.model('registration',registrationSchema);


function encryptPassword(password)
{
let saltRounds=10
let salt=bcrypt.genSaltSync(saltRounds)
let encryptPassword=bcrypt.hashSync(password,salt)
  return encryptPassword;
}

exports.registrationModel=(userData,callback)=>{

    console.log("in register model !");
    
    model.find({email:userData.email},(err,data)=>{
    
        if(err)
        {
          callback("error occured")
        }
        else if(data.length> 0) 
        {

        return callback("already registerd, login directly")
        }
         
     else{



    let newUser=new model({

        firstName:userData.firstName,
        lastName:userData.lastName,
        email:userData.email,
        password:encryptPassword(userData.password)

    })

// save the data 
    newUser.save((err,data)=>{
        if(err)
        {
            callback(err)
        }
        else if(data.length> 0) 
        {   
            console.log("\n\n\n\t\t\tNEW USER REGISTERED SUCCESFULLY !!!!   ");
            
            
            callback(null,"new user entered")
        }
    })
}
 })
}
/***************/

exports.loginModel=(loginData,callback)=>{ 

    model.find({'email':loginData.email},(err,data)=>{ 
        console.log(data)
        if(err) {
            console.log("error generated while login")
        } 
        else if(data.length>0)
        {
            for(let i=0;i<data.length;i++){
            bcrypt.compare(loginData.password,data[0].password,(err,res)=>{ 
                if(err)
                {
                    console.log(err)
                }
                else if(res===true)
                {   console.log("\n\n\t\tLOGIN SUCCESFULL !");
                
                   callback(null,"login successfull")
                }
                else if(res===false)
                {
                callback("password not matched")

                }
            })
            }
        } 
        else{
            callback("email not found")
            }
      })
}
//***********************/

exports.forgetModel=(forgetData,callback)=>{ 
    

    model.find({'email':forgetData.email},(err,data)=>{ 
        console.log(data)
        if(err) {
            console.log("error occured")
                } 
        else if(data.length>0)
        {
            console.log("matched")

            let payload = {
                        '_id': data[0]._id
                    }
                    // create new token 
                    let newToken = tokenGenrator.generateToken(payload);
                    console.log(newToken);

             // send on that email-id       
             nodeMail.sendmail(forgetData.email,newToken,(err,data)=>{ 
               if(err)
               {
            callback(err)
                }
              else
                {
            callback(data)
                }
        })
        
       }
     
    else 
    {
        callback("invalid email")
    }
})
}

exports.resetModel=(resetdata,callback)=>{ 

                console.log(resetdata)
        let hashedPassword=encryptPassword(resetdata.password)
      
                                                                          
                model.findOneAndUpdate({ '_id': resetdata.id }, { $set: { 'password':hashedPassword} }, (err, data) => {
                    if (err) {
                        console.log("update the error");
                        return callback(err + " update the error")
                    } else {
                        if (data) {
                            console.log("update successfully");
                            return callback(null, data)
                        } else {
                            console.log("user credential not found,check it");
                            return callback("user credential not found")
                        }
                    }
                })
            }


    










