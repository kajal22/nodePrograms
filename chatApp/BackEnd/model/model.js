
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
                {
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

            let email = {
                        'email': data[0].email
                    }
                    // create new token 
                    let newToken = tokenGenrator.generateToken(email);
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

exports.resetModel=(resetData,callback)=>{ 

        console.log("inside modelpassword " + resetData.password);
        console.log("id is" + resetData.email);

        encryptPassword(resetData.password, (err, hashedPassword) => {
            if (err) {
                return callback(err)
            }
            else {
                Model.findOneAndUpdate({ '_id': resetData.email }, { $set: { 'password':hashedPassword} }, (err, data) => {
                    if (err) {
                        console.log("update document error");
                        return callback(err + " update document error")
                    } else {
                        if (data) {
                            console.log("update document success");
                            return callback(null, data)
                        } else {
                            console.log("user credential not found");
                            return callback("user credential not found")
                        }
                    }
                })
            }
        })

    }














//    model.find({'email':loginData.email},(err,data)=>{ 
//         console.log(data)
//         if(err)
//         {
//           console.log("error not found email-id")
//         }
//         else 
//         {
            
//             bcrypt.compare(loginData.password,data[0].password, function(err, data) {
//                 if(err) {
    //          else if(data===true)
    //            {
//                 return callback("password not matched")
//                 } else if (data===false){
                    
//                     return callback(null," password matched")
//                 }

//               });
    
        
//      }
// else{
//     callback("email not found")
// }
//  })
//  }