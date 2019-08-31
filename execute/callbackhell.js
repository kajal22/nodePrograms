addition(2,function(addRes,err){
    if(!err){
         Subtract(addRes,function(subRes,err){
          if(!err){
            multiplication(subRes,function(mulRes,err){
                console.log(mulRes);
                
               }); 
            }
         });
    }
});

function addition(val,callback){
  callback(val+5,false);
}
function Subtract(val,callback){
    callback(val-3,false);
  }
  function multiplication(val,callback){
    callback(val*5,false);
  }