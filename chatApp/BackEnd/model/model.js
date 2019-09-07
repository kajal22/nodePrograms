const bcrypt = require('bcrypt');
const mongoose =require('mongoose')
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
          console.log("error occured")
        }
        else if(data.length> 0) 
        {
        console.log("email already exist")

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
            
            callback(null,data)
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
                   callback("password matches")
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
    let mail=require('../../middleWare/nodemailer')
    let emailId=forgetData

    model.find({'email':forgetData.email},(err,data)=>{ 
        console.log(data)
        if(err) {
            console.log("error occured")
           
                } 
        else if(data.length>0)
        {
           mail.useremail(emailId)
            callback(err)
        }
        else
        {
            callback(data)

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