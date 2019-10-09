let noteModel = require("../model/noteModel")
class ServiceNote {

    createNoteService(requestObject) {
        return new Promise((resolve, reject) => {
            let noteData = {
                "userId": requestObject.userId,
                "title": requestObject.title,
                "description": requestObject.description,
                "reminder": requestObject.reminder,
                "isTrash": requestObject.isTrash,
                "isArchive": requestObject.isArchive,
                "label": requestObject.label,
                "color": requestObject.color
            };
            noteModel.create(noteData)
                .then(data => {
                    resolve(data);
                }).catch((err) => {
                    reject(err);
                });
        });

    }


    deleteNoteService(deleteData) {
        return new Promise((resolve, reject) => {
            let searchBy = {
                "_id": deleteData._id
            }
            noteModel.delete(searchBy)
                .then(data => {
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })
        })
    }


    updateNoteService(updateDataRequest) {
        return new Promise((resolve, reject) => {
            let keyObject = Object.keys(updateDataRequest);
            console.log("KEYOBJECT", keyObject);
            let updateData = {};
            let findData = {};
            for (let i = 0; i < keyObject.length; i++) {
                if (keyObject[i] == "_id" || keyObject[i] == "userId") {
                    findData[keyObject[i]] = updateDataRequest[keyObject[i]]
                    console.log("findddddd",findData);
                    
                     continue;
                }
                updateData[keyObject[i]] = updateDataRequest[keyObject[i]]
                console.log("UPDATE",updateData);
                
            }

            noteModel.update(findData, updateData)
                .then(UpdatedResponce => {
                    resolve(UpdatedResponce)
                }).catch(err => {
                    reject(err)
                })
        })
    }


    getAllNoteService(getAllData) {
        return new Promise((resolve, reject) => {
            let searchBy = {
                "userId": getAllData.userId
            }
            noteModel.read(searchBy)
                .then((data) => {
                    resolve(data);
                }).catch((err) => {
                    reject(err);
                });
        })
    }
}
let serviceObject = new ServiceNote();
module.exports = serviceObject;