let labelService = require("../services/labelService")

class LabelControl {

    async createLabelController(req, res) {
        let response = {};
        try {
            req.check("labelName", "labelName should be string format").notEmpty();
            let error = req.validationErrors();

            if (error) {
                response.success = false;
                response.message = "error while validation";
                response.error = error;
                return res.status(422).send(response);
            }
            else {
                let labelData = {
                    "labelName": req.body.labelName,
                    "userId": req.token._id
                };
                console.log("labelData", labelData)

                let makeLabelResult = await labelService.createLabelService(labelData)
                if (makeLabelResult) {
                    response.success = true;
                    response.message = "label created successfully";
                    response.data = makeLabelResult;
                    return res.status(200).send(response);

                } else {
                    response.success = false;
                    response.message = "ERROR OCCURED";
                    response.error = error;
                    return res.status(400).send(response);
                }
            }
        } catch (err) {
            return res.status(400).send(response);
        }
    }
    async updateLabelController(req, res) {
        let response = {}
        try {
            req.check("newLabelName", "label name should be string").notEmpty()
            let error = req.validationErrors()
            if (error) {
                response.success = false;
                response.message = "error while validation";
                response.error = error;
                return res.status(422).send(response);
            } else {
                let newLabelData = {
                    "newLabelName": req.body.newLabelName,
                    "_id": req.body._id
                };


                let updateLabelResult = await labelService.updateLabelService(newLabelData)
                if (updateLabelResult) {
                    response.success = true;
                    response.message = "label updated successfully";
                    response.data = updateLabelResult;
                    return res.status(200).send(response);

                } else {
                    response.success = false;
                    response.message = "ERROR OCCURED";
                    response.error = error;
                    return res.status(400).send(response);

                }
            }
        } catch (err) {
            return res.status(400).send(response)
        }
        async

    }
    async deleteLabelController(req, res) {
        let response = {}
        let deleteData = {
            "_id": req.body._id
        }

        let deleteLabelResult = await labelService.deleteLabelService(deleteData)


        if (deleteLabelResult) {
            response.success = true;
            response.data = deleteLabelResult;
            return res.status(200).send(response);
        } else {
            response.success = false;
            response.message = "ERROR OCCURED";
            response.error = deleteLabelResult;
            return res.status(400).send(response);

        }
    }
    getAllLabelController(req, res) {
        let response = {}
        let error = req.validationErrors();
        let getAllData = {
            "userId": req.token._id
        }
        if (error) {
            response.success = false;
            response.message = "error while validation";
            response.error = error;
            return res.status(422).send(response);
        }
        else {
            labelService.getAllLabelService(getAllData)
                .then(data => {
                    response.success = true;
                    response.message = "get all successfully"
                    response.data = data;
                    return res.status(200).send(response);
                }).catch(err => {
                    response.success = false;
                    response.message = "ERROR OCCURED";
                    return res.status(400).send(response);
                })
        }

    }
}
let controlObject = new LabelControl();
module.exports = controlObject;