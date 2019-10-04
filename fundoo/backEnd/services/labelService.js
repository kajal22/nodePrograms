class Service{
  async makeLabelService(labetData)
{
let searchBy={
    "_id":labetData._id
}
let createResult=await labelModel(searchBy)
if(createResult)
{
return true 
}
else 
{
return false
}
}
}
let serviceObject=new Service();
module.exports =serviceObject;
