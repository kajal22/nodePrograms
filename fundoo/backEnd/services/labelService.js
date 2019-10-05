let labelModel = require("../model/labelModel")

class Service {
  async createLabelService(labelData) {

    let createResult = await labelModel.create(labelData);
    if (createResult) {
      return true
    }
    else {
      return false
    }
  }


  async updateLabelService(newLabelData) {
    let searchBy = {
      "_id": newLabelData._id
    }
    let updateData = {
      "labelName": newLabelData.newLabelName
    }
    let updateResult = await labelModel.update(searchBy, updateData)
    if (updateResult) {
      return true
    }
    else {
      return false
    }
  }


  async deleteLabelService(deleteData) {
    let searchBy = {
      "_id": deleteData._id
    }
    let deletedResult = await labelModel.delete(searchBy)
    if (deletedResult) {
      return deletedResult
    }
    else {
      return deletedResult
    }

  }

  getAllLabelService(getAllData) {
    return new Promise((resolve, reject) => {
      let searchBy = {
        "userId": getAllData.userId
      }
      labelModel.read(searchBy)
        .then((data) => {
          resolve(data);
        }).catch((err) => {
          reject(err);
        });

    })
  }
}
let serviceObject = new Service();
module.exports = serviceObject;
