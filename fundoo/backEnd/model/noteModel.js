const mongoose = require("mongoose");
const dateFormat = require("dateformat");
let noteSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "registrations"
    },

    title: {
        type: String,
    },

    description: {
        type: String,
    },

    reminder: {
        type: String,
    },

    isTrash: {
        type: Boolean,
    },

    isArchive: {
        type: Boolean,
    },
    /**make field and access label collection of data as array and show in note database**/
    label: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "labelCollection"
    }],

    color: {
        type: String,
    },

},
    {
        timestamps: true
    });

class ModelClass {
    constructor() {
        this.userNote = mongoose.model("noteDetails", noteSchema);
    }

    /**
     * create in database all data then save
     * @param {*} noteData 
     */
    create(noteData) {
        return new Promise((resolve, reject) => {
            let note = new this.userNote({
                "userId": noteData.userId,
                "title": (noteData.title == null) ? "" : noteData.title,
                "description": (noteData.description == null) ? "" : noteData.description,
                "reminder": (noteData.reminder == null) ? null : noteData.reminder,
                "isTrash": (noteData.isTrash == null) ? false : noteData.isTrash,
                "isArchive": (noteData.isArchive == null) ? false : noteData.isArchive,
                "color": (noteData.color == null) ? "#ffffff" : noteData.color,
            });
            note.save()
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    /**
     * search for a particular user
     * @param {*} searchBy 
     */
    read(searchBy) {
        return new Promise((resolve, reject) => {
            this.userNote.find(searchBy).populate("label")
                .exec(function (err, responseData) {
                    if (err) {
                        reject(err);
                        return handleError(err);
                    } else {
                        resolve(responseData);

                    }
                });
        });
    }
    /**
     * search and populate by finding match
     * @param {*} searchLabel 
     * @param {*} regex 
     */
    readLabel(searchLabel, regex) {
        return new Promise((resolve, reject) => {
            this.userNote.find(searchLabel).populate({
                path: "label",
                match: { labelName: { $regex: regex, $options: "i" } }
            }).exec(function (err, data) {
                if (err) {
                    reject(err);
                    return handleError(err);
                } else {
                    resolve(data);

                }
            });
        });
    }

    /**
     * searchBy searching a particular user and DELETE by using deleteOne
     * @param {*} searchBy  
     */
    delete(searchBy) {
        return new Promise((resolve, reject) => {
            this.userNote.deleteOne(searchBy)

                .then((data) => {
                    if (data.deletedCount == 1) {
                        resolve("data deleted");
                    }
                    else {
                        resolve("data not deleted");
                    }
                }).catch(error => {
                    reject("error");
                });
        });
    }

    /**
    * searchBy searching a particular user and update by using updateData
    * @param {*} searchBy 
    * @param {*} updateData 
    */
    update(searchBy, updateData) {
        return new Promise((resolve, reject) => {
            this.userNote.updateOne(searchBy, updateData)
                .then(response => {
                    resolve(response);
                }).catch(error => {
                    reject(error);
                });
        });
    }

    findLabelMatch(findQuery, populateObject) {
        return new Promise((resolve, reject) => {
            this.userNote.find(findQuery).populate(populateObject).exec(function (err, users) {
                if (err) {
                    reject(err);
                }
                /** filter for get only matched label on note data */
                users = users.filter(function (user) {
                    console.log("users", user.label);
                    if (user.label.length > 0) {
                        return user;
                    }
                });
                resolve(users);
            });
        });
    }


}
let ModelObject = new ModelClass();
module.exports = ModelObject;