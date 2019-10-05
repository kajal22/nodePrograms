const mongoose = require("mongoose");

let labelSchema = mongoose.Schema({
    labelName: {
        type: String,
        require: [true, "firstName should be string"]
    },
    userId: {
        type: String,
        require: [true, "firstName should be string"]
    },
},
    {
        timestamps: true
    });
class createModel {

    constructor() {
        this.labelDataCollection = mongoose.model("labelCollection", labelSchema);
    }
    create(labelData) {
        console.log("LOGINDATA", labelData);

        return new Promise((resolve, reject) => {
            let label = new this.labelDataCollection({
                "labelName": labelData.labelName,
                "userId": labelData.userId
            });

            label.save()
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    read(search) {
        return new Promise((resolve, reject) => {
            this.labelDataCollection.find(search)
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

    update(searchBy, updateData) {
        return new Promise((resolve, reject) => {
            console.log(searchBy);

            this.labelDataCollection.updateOne(searchBy, { $set: updateData })
                .then(response => {
                    console.log("updated", response);

                    resolve("updated");
                }).catch(error => {
                    reject("error");
                });
        });
    }

    delete(searchBy) {
        return new Promise((resolve, reject) => {
            console.log(searchBy);
            this.labelDataCollection.deleteOne(searchBy)

                .then((data) => {
                    console.log("DAAAAAAATAAA",data);
                    
                    if (data.deletedCount == 1) {
                        resolve("data deleted")
                    }
                    else{
                        resolve("data not deleted");
                    }
                }).catch(error => {
                    reject("error");
                });
        })

    }

}
let modelObject = new createModel();
module.exports = modelObject;