const mongoose = require("mongoose");

let labelSchema = mongoose.Schema({
    labelName: {
        type: String,
        require: [true, "should be string"]
    },
    userId: {
        type: String,
        require: [true, "should be string"]
    },
},
    {
        timestamps: true
    });
class createModel {

    constructor() {
        this.labelDataCollection = mongoose.model("labelCollection", labelSchema);
    }

    /**
     * method used for create document and save the data in database.
     * @param {object} labelData 
     */

    create(labelData) {
        let labels = this.labelDataCollection;
        return new Promise((resolve, reject) => {
            let label = new labels({
                "labelName": labelData.labelName,
                "userId": labelData.userId
            });

            label.save()
                .then(data => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    /**
    * search for a particular user
    * @param {object} search 
    */

    read(search) {
        return new Promise((resolve, reject) => {
            this.labelDataCollection.find(search)
                .then((data) => {
                    if (data.length > 0)
                        {resolve(data);}
                    else
                        {resolve();}

                }).catch((err) => {
                    reject(err);
                });
        });
    }


    /**
     * searchBy searching a particular user and update by using updateData
     * @param {object} searchBy 
     * @param {object} updateData 
     */
    update(searchBy, updateData) {
        return new Promise((resolve, reject) => {
            this.labelDataCollection.updateOne(searchBy, { $set: updateData })
                .then(response => {
                    resolve("updated");
                }).catch(error => {
                    reject("error");
                });
        });
    }

    /**
    * searchBy searching a particular user and DELETE by using deleteOne
    * @param {object} searchBy  
    */
    delete(searchBy) {
        return new Promise((resolve, reject) => {
            this.labelDataCollection.deleteOne(searchBy)
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

}
let modelObject = new createModel();
module.exports = modelObject;