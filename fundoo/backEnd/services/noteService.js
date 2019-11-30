let noteModel = require("../model/noteModel");
const redisService = require("../services/redisService");
let utility = require("../utility");
const logger = require("../logger");

class ServiceNote {
    /**
     @description-create note from controller userId will be called passes to the model
     using promises.
    **/
    create(requestObject) {
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
                    logger.info("noteData", data);
                    redisService.tokenRedis(requestObject.userId)
                        .then(redisResponse => {
                            resolve(data);
                        }).catch(err => {
                            logger.error("error while creationg note");
                            reject(err);
                        });


                }).catch((err) => {
                    logger.error("error while creationg note");
                    reject(err);
                });
        });

    }
    /** 
    @description-delete note using update method,set isTrash is true that  will pass to 
    model and update that false to true come back as a value using promises.
    **/
    delete(deleteData) {
        console.log("delete", deleteData);
        return new Promise((resolve, reject) => {
            let searchBy = {
                "userId": deleteData.userId,
                "_id": deleteData._id
            };

            let updateData = {
                $set: { "isTrash": true }
            };
            noteModel.delete(searchBy, updateData)
                .then(data => {
                    redisService.tokenRedis(deleteData.userId)
                        .then(redisResponse => {
                            resolve(data);
                        }).catch(err => {
                            reject(err);
                        });
                }).catch(err => {
                    reject(err);
                });
        });
    }

    /** 
    @description-updatenote from finding id and user id that will store in findData and
    except id and user id, can update all by set value.
    **/
    update(updateDataRequest) {
        console.log("updateDataRequest", updateDataRequest);
        return new Promise((resolve, reject) => {
            let keyObject = Object.keys(updateDataRequest);

            let updateInData = {};
            let findData = {};
            for (let i = 0; i < keyObject.length; i++) {
                if (keyObject[i] == "_id" || keyObject[i] == "userId") {
                    findData[keyObject[i]] = updateDataRequest[keyObject[i]];
                    continue;
                }
                updateInData[keyObject[i]] = updateDataRequest[keyObject[i]];
            }
            let updateData = {
                $set: updateInData
            };
            noteModel.update(findData, updateData)
                .then(updatedData => {
                    redisService.tokenRedis(updateDataRequest.userId)
                        .then(redisResponse => {
                            console.log(updatedData, "updatedData");

                            resolve(updatedData);
                        }).catch(err => {
                            console.log("serve", err);

                            reject(err);
                        });
                }).catch(err => {
                    console.log("serve1111", err);
                    reject(err);
                });
        });
    }

    /** 
    @description-get All note using read search by id and is archive false method will pass to model 
    come back as data value using promises.
    **/



    getAll(getAllData) {
        console.log("getallData");
        return new Promise((resolve, reject) => {
            let key = Object.keys(getAllData);
            let findData = {};
            let redisData;
            let keyRedis;
            for (let i = 0; i < key.length; i++) {

                if ((key[i] == "isArchive" && getAllData[key[i]] == "true") || (key[i] == "isTrash" && getAllData[key[i]] == "true")) {
                    keyRedis = getAllData.userId + key[i];
                    redisService.redisGet(keyRedis, (err, response) => {

                        if (err || response == null) {
                            for (let i = 0; i < key.length; i++) {
                                findData[key[i]] = getAllData[key[i]];
                            }

                            noteModel.read(findData)
                                .then((noteData) => {
                                    if (noteData) {
                                        redisService.redisSet(keyRedis, JSON.stringify(noteData))
                                            .then(data => {

                                                console.log("dataaaaaa");

                                                resolve({ msg: "database get data", data: noteData });
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
                            console.log("from redis");
                            resolve({ msg: "redis get data", data: redisData, totalCount: redisData.length });
                        }
                    });

                }
                else if ((key[i] == "isArchive" && getAllData[key[i]] == "false") || (key[i] == "isTrash" && getAllData[key[i]] == "false")) {

                    keyRedis = getAllData.userId + "allNote";
                    redisService.redisGet(keyRedis, (err, response) => {
                        if (err || response == null) {
                            for (let i = 0; i < key.length; i++) {
                                findData[key[i]] = getAllData[key[i]];

                            }
                            noteModel.read(findData)
                                .then((noteData) => {
                                    if (noteData) {
                                        redisService.redisSet(keyRedis, JSON.stringify(noteData))
                                            .then(data => {
                                                console.log("dataaaaaa");
                                                resolve({ msg: "database get data", data: noteData });
                                            }).catch(err => {
                                                reject(err);
                                            });
                                    } else {
                                        reject(false);
                                    }
                                }).catch((err) => {
                                    reject(err);
                                });
                        }
                        else {
                            redisData = JSON.parse(response);
                            console.log("from redis");
                            resolve({ msg: "redis get data", data: redisData, totalCount: redisData.length });


                        }
                    });

                }
                else if (key[i] == "reminder") {
                    keyRedis = getAllData.userId + key[i];
                    redisService.redisGet(keyRedis, (err, response) => {
                        if (err || response == null) {
                            for (let i = 0; i < key.length; i++) {
                                if (key[i] == "reminder") {
                                    findData = { "reminder": { $nin: [null, ""] } };
                                    continue;
                                }
                                
                                findData[key[i]] = getAllData[key[i]];
                            }
                            noteModel.read(findData)
                                .then((noteData) => {
                                    if (noteData) {
                                        redisService.redisSet(keyRedis, JSON.stringify(noteData))
                                            .then(data => {
                                                resolve({ msg: "database get data", data: noteData });
                                            }).catch(err => {
                                                reject(err);
                                            });
                                    } else {
                                        reject(false);
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

                }
                else if (key[i] == "labelId") {
                    keyRedis = getAllData.labelId + "labelId";
                    redisService.redisGet(keyRedis, (err, response) => {
                        if (err || response == null) {
                            let findQuery = {
                                "userId": getAllData.userId
                            };

                            let populateObject = {
                                path: "label",
                                match: { _id: getAllData.labelId }
                            };
                            noteModel.findLabelMatch(findQuery, populateObject)
                                .then((noteData) => {
                                    if (noteData) {
                                        redisService.redisSet(keyRedis, JSON.stringify(noteData))
                                            .then(data => {
                                                console.log("dataaaaaa");

                                                resolve({ msg: "database get data", data: noteData });
                                            }).catch(err => {
                                                reject(err);
                                            });
                                    } else {
                                        reject(false);
                                    }
                                }).catch((err) => {
                                    reject(err);
                                });
                        }
                        else {
                            redisData = JSON.parse(response);
                            console.log("from redis");
                            resolve({ msg: "redis get data", data: redisData, totalCount: redisData.length });
                        }
                    });

                }

            }

        });
    }


    /** 
     @description-get All label using read method will pass to model come back as a 
    data value using promises.
    **/

    searchNoteService(searchData) {
        return new Promise((resolve, reject) => {
            let regex = searchData.searched;
            let searchBy = {
                $and: [{
                    $or: [
                        { title: { $regex: regex, $options: "i" } },
                        { description: { $regex: regex, $options: "i" } },
                        { reminder: { $regex: regex, $options: "i" } },
                        { color: { $regex: regex, $options: "i" } }],
                }, { "userId": searchData.userId }]
            };

            let searchQuery = { "userId": searchData.userId };

            /**read via searching user id in searchBy and user entered searched(regex) 
            * from title,description,reminder,color  
            **/

            noteModel.read(searchBy)
                .then((responseData) => {
                    if (responseData.length >= 0) {

                        /**readlabel via searching user id in searchQuery and user entered searched(regex) 
                         * readLabel will populate(fetch) from database IN noteData 
                        **/

                        noteModel.readLabel(searchQuery, regex)
                            .then((data) => {
                                if (data.length > 0) {
                                    let filterData = data.filter(function (element) {
                                        return element.label.length > 0;
                                    });

                                    let mergeOutput = responseData.concat(filterData);
                                    if (mergeOutput.length > 0) {
                                        for (let i = 0; i < mergeOutput.length - 1; i++) {
                                            for (let j = i + 1; j < mergeOutput.length; j++) {
                                                if (mergeOutput[i]._id.equals(mergeOutput[j]._id)) {
                                                    mergeOutput.splice(j, 1);
                                                }
                                            }
                                        }
                                        resolve(mergeOutput);
                                    }
                                }
                                if (data) { resolve(data); }
                                else { reject("data not found"); }
                            }).catch((err) => {
                                reject(err);
                            });
                    } else { reject("data not found"); }
                }).catch((err) => {
                    reject(err);
                });
        });
    }


    /** 
    @description-add label on note using update method will pass the labelId 
    and push in array to model come back as a data value using promises.
    **/
    addLabelNote(addLabel) {

        return new Promise((resolve, reject) => {
            let searchBy = {
                _id: addLabel._id,
                userId: addLabel.userId
            };
            let updateData = {
                $push: {
                    "label": addLabel.label
                }
            };
            noteModel.update(searchBy, updateData)
                .then(updatedData => {
                    redisService.tokenRedis(addLabel.userId)
                        .then(redisResponse => {
                            resolve(updatedData);
                        }).catch(err => {
                            reject(err);
                        });
                }).catch(err => {
                    reject(err);
                });
        });
    }
    /** 
     @description-delete label on note using update method will pass the labelId 
     and pull in array to model come back as a data value using promises.
    **/
    deleteLabelNote(deleteLabel) {
        return new Promise((resolve, reject) => {
            let searchBy = {
                _id: deleteLabel._id,
                userId: deleteLabel.userId
            };
            let updateData = {
                $pull: {
                    "label": deleteLabel.label
                }
            };
            noteModel.update(searchBy, updateData)
                .then(updatedData => {
                    redisService.tokenRedis(deleteLabel.userId)
                        .then(redisResponse => {
                            resolve(updatedData);
                        }).catch(err => {
                            reject(err);
                        });
                }).catch(err => {
                    reject(err);
                });
        });
    }

    reminderNotify(userData) {
        let currentDate = new Date();
        return new Promise((resolve, reject) => {
            let searchBy = {
                reminder: { $nin: [null, ""] }
            };
            noteModel.read(searchBy)
                .then(data => {
                    for (let i = 0; i < data.length; i++) {
                        if (Date.parse(currentDate) == Date.parse(data[i].reminder)) {
                            resolve(data[i]);
                        }
                    }
                }).catch(err => {
                    reject(err);
                });
        });
    }
}

let serviceObject = new ServiceNote();
module.exports = serviceObject;