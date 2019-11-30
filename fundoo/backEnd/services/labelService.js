let labelModel = require("../model/labelModel");
const redisService = require("../services/redisService");
class Service {
  /** 
  @description-create label using create method will pass to model come back as a 
  true or false value using async await.
  **/

  async create(labelData) {

    let createResult = await labelModel.create(labelData);
    if (createResult) {

      let response = await redisService.tokenRedis(labelData.userId);
      if (response >= 0) {
        return true;
      }
      else {
        return false;
      }
    }
  }

  /** 
  @description-update label using update method will pass to model come back as a 
  true or false value using async await. 
  **/
  async update(newLabelData) {
    let searchBy = {
      "_id": newLabelData._id
    };
    let updateData = {
      "labelName": newLabelData.newLabelName
    };
    let updateResult = await labelModel.update(searchBy, updateData);
    if (updateResult) {

      let response = await redisService.tokenRedis(newLabelData.userId);
      if (response >= 0) {
        return true;
      }
      else {
        return false;
      }
    }
  }
  /** 
  @description-delete label using delete method will pass to model come back as a 
  return value using async await.
  **/
  async delete(deleteData) {
    console.log(deleteData.userId);

    let searchBy = {
      "_id": deleteData._id
    };
    let deletedResult = await labelModel.delete(searchBy);
    if (deletedResult) {
      console.log("deletedResult", deletedResult);
      let response = await redisService.tokenRedis(deleteData.userId);
      if (response >= 0) {
        return deletedResult;
      }
      else {
        return deletedResult;
      }
    }
  }

  /** 
     @description-get All label using read method will pass to model come back as a 
     data value using promises.
     **/

  getAllLabelService(getAllData) {
    console.log("all", getAllData);

    return new Promise((resolve, reject) => {

      let redisData;
      let keyRedis;
      let searchBy = {
        "userId": getAllData.userId
      };
      keyRedis = getAllData.userId + "label";
      redisService.redisGet(keyRedis, (err, response) => {
        console.log("getData", response);

        if (err || response == null) {
          labelModel.read(searchBy)
            .then((labelData) => {
              if (labelData) {

                redisService.redisSet(keyRedis, JSON.stringify(labelData))
                  .then(data => {
                    console.log("data", data);

                    resolve({ msg: "database get data", data: labelData });


                  }).catch(err => {
                    reject(err);
                  });
              } else {
                reject(err);
              }
            }).catch((err) => {
              reject(err);
            });
        }
        else {
          redisData = JSON.parse(response);
          resolve({ msg: "redis get data", data: redisData, totalCount: redisData.length });
        }
      });
    });
  }

}
let serviceObject = new Service();
module.exports = serviceObject;
