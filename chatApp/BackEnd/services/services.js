
/*************************************************************************

* Purpose          : chatApp
* @file            : services.js
* @author          : kajal choudhary
* @version         : 1.0
* @since           : 5-09-2019
* 
**************************************************************************/




exports.registrationService=(userData,callback)=>{
const model=require('../model/model')

model.registrationModel(userData,(err,data)=>{
    if(err)
    {
   callback(err)
    }
    else{
        
    callback(null,data)
    }
})
}
/*********************/
exports.loginService=(loginData,callback)=>{
    const model=require('../model/model')

model.loginModel(loginData,(err,data)=>{

    if(err)
    {
   callback(err)
    }
    else{
        
    callback(null,data)
    }
})
}
/**************/

exports.forgetService=(forgetData,callback)=>{
    const model=require('../model/model')

model.forgetModel(forgetData,(err,data)=>{

    if(err)
    {
   callback(err)
    }
    else{
        
    callback(null,data)
    }
})
}

//***********/
exports.resetService=(resetData,callback)=>{
    const model=require('../model/model')

model.resetModel(resetData,(err,data)=>{

    if(err)
    {
   callback(err)
    }
    else{
        // get the data of data(from model of data) pass to local storage in front
    callback(null,data)
    }
})
}


 /***********modified*******/
exports.getListDataService=(callback)=>{
    const model=require('../model/model')

model.getListDataModel((err,data)=>{

    if(err)
    {
  return callback(err)
    }
    else{
        // get the data of data(from model of data) pass to local storage in front
        console.log("i am in services");
    
    return callback(null,data)
    }
})
}


