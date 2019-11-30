let labelService = require("../services/labelService");

class LabelControl {
    /**
    * @description create label data
    * @param {object} req user request 
    * @param {object} res response from server
    * @returns {object} res
    */

    async create(req, res) {
        let response = {};
        try {
            req.body.userId = req.token._id;
            req.check("labelName", "should not empty").notEmpty();
            req.check("userId", " should not empty").notEmpty();
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

                let makeLabelResult = await labelService.create(labelData);

                if (makeLabelResult) {
                    response.success = true;
                    response.message = "label created successfully";
                    response.data = makeLabelResult;
                    return res.status(200).send(response);

                } else {
                    response.success = false;
                    response.message = "ERROR OCCURED";
                    response.error = error;
                    /**The 400 Bad Request error is an HTTP status code that means that 
                     * the request you sent to the website server  **/
                    return res.status(400).send(response);
                }
            }
        } catch (err) {
            return res.status(400).send(response);
        }
    }

    /**
    * @description update label data
    * @param {object} req user request 
    * @param {object} res response from server
    * @returns {object} res
    */

    async update(req, res) {
        console.log("\n\n\n\n\n\n\n\n\n\n\n\n\\n=======>>>>>>>>>>>INSIDE 200", req.body);
        console.log("\n\n\n\n\n\n\n\n\n\n\n\n\\n");

        let response = {};
        try {
            req.check("newLabelName", "label name should not empty").notEmpty();
            req.check("_id", "label id should not be empty").notEmpty();
            let error = req.validationErrors();
            if (error) {
                response.success = false;
                response.message = "error while validation";
                response.error = error;
                /**The 422 is Unprocessable Entity */
                console.log("====================================================================================INSIDE 422");
                
                return res.status(422).send(response);
            } else {
                console.log("==================================================================================INSIDE 200");

                let newLabelData = {
                    "newLabelName": req.body.newLabelName,
                    "_id": req.body._id,
                    "userId": req.token._id
                };


                let updateLabelResult = await labelService.update(newLabelData);
                if (updateLabelResult) {
                    response.success = true;
                    response.message = "label updated successfully";
                    response.data = updateLabelResult;
                    return res.status(200).send(response);

                } else {
                    response.success = false;
                    response.message = "ERROR OCCURED";
                    response.error = error;
                    /**The 400 Bad Request error is an HTTP status code that means that 
                   * the request you sent to the website server  **/
                    return res.status(400).send(response);

                }
            }
        } catch (err) {
            return res.status(400).send(err);
        }

    }
    /**
     * @description delete label
     * @param {object} req user request 
     * @param {object} res response from server
     * @returns {object} res
     */
    async delete(req, res) {
        let response = {};
        req.check("_id", "label id should not be empty").notEmpty();
        let error = req.validationErrors();
        if (error) {
            response.success = false;
            response.message = "error while validation";
            response.error = error;
            /**The 422 is Unprocessable Entity */
            return res.status(422).send(response);
        } else {
            let deleteData = {
                "_id": req.body._id,
                "userId": req.token._id
            };

            let deleteLabelResult = await labelService.delete(deleteData);


            if (deleteLabelResult) {
                response.success = true;
                response.message = "label deleted sucessfully";
                response.data = deleteLabelResult;
                return res.status(200).send(response);
            } else {
                response.success = false;
                response.message = "ERROR OCCURED";
                response.error = deleteLabelResult;
                /**The 400 Bad Request error is an HTTP status code that means that 
                   * the request you sent to the website server  **/
                return res.status(400).send(response);
            }
        }
    }

    /**
    * @description get all label data
    * @param {object} req user request 
    * @param {object} res response from server
    * @returns {object} res
    */

    getAllLabelController(req, res) {
        let response = {};
        req.body.userId = req.token._id;
        req.check("userId", "label id should not be empty").notEmpty();
        let error = req.validationErrors();
        if (error) {
            response.success = false;
            response.message = "error while validation";
            response.error = error;
            /**The 422 is Unprocessable Entity */
            return res.status(422).send(response);
        } else {
            let getAllData = {
                "userId": req.body.userId
            };
            labelService.getAllLabelService(getAllData)
                .then(data => {
                    response.success = true;
                    response.message = "get all successfully";
                    response.data = data;
                    return res.status(200).send(response);
                }).catch(err => {
                    response.success = false;
                    response.message = "ERROR OCCURED";
                    /**The 400 Bad Request error is an HTTP status code that means that 
                   * the request you sent to the website server  **/
                    return res.status(400).send(response);
                });
        }

    }
}
let controlObject = new LabelControl();
module.exports = controlObject;