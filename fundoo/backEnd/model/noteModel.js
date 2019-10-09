const mongoose = require("mongoose");
let noteSchema = mongoose.Schema({
    userId: {
       type :String
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

    label: {
        type: String,
    },

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

    create(noteData) {
        console.log("NOTESS MODEL", noteData);

        return new Promise((resolve, reject) => {
            let note = new this.userNote({
                "userId": noteData.userId,
                "title": noteData.title,
                "description": noteData.description,
                "reminder": noteData.reminder,
                "isTrash": noteData.isTrash,
                "isArchive": noteData.isArchive,
                "label": noteData.label,
                "color": noteData.color

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


    read(searchBy) {
        return new Promise((resolve, reject) => {
            this.userNote.find(searchBy)
                .then((data) => {
                    if (data.length > 0)
                        resolve(data);
                    else
                        resolve()

                }).catch((err) => {
                    reject(err);
                });
        });
    }

    delete(searchBy) {
        return new Promise((resolve, reject) => {
            console.log(searchBy);
            this.userNote.deleteOne(searchBy)

                .then((data) => {
                    if (data.deletedCount == 1) {
                        resolve("data deleted")
                    }
                    else {
                        resolve("data not deleted");
                    }
                }).catch(error => {
                    reject("error");
                });
        })
    }

 

        update(searchBy, updateData) {
            return new Promise((resolve, reject) => {
                this.userNote.updateOne(searchBy, { $set: updateData })
                    .then(response => {
                        console.log("updated", response);
                        resolve(response);
                    }).catch(error => {
                        reject(error);
                    });
            });
        }

}
let ModelObject = new ModelClass();
module.exports = ModelObject