
let noteService = require("../services/noteService");
class NoteCtrl {
    /**
    * @description create note data
    * @param {object} req user request 
    * @param {object} res response from server
    * @returns {object} res
    */
    create(req, res) {
        let response = {};
        try {

            req.body.userId = req.token._id;
            noteService.create(req.body)
                .then(data => {
                    response.success = true;
                    response.message = "create successfully";
                    response.data = data;
                    return res.status(200).send(response);
                }).catch(err => {
                    response.success = false;
                    response.message = "ERROR OCCURED";
                    response.error = err;
                    return res.status(400).send(response);
                });

        } catch (err) {
            return res.status(400).send(err);
        }
    }

    /**
    * @description delete note data
    * @param {object} req user request 
    * @param {object} res response from server
    * @returns {object} res
    */
    delete(req, res) {

        let response = {};
        try {
            req.body.userId = req.token._id;
            noteService.delete(req.body)
                .then(data => {

                    response.success = true;
                    response.message = "DELETED Successfully";
                    response.data = data;
                    return res.status(200).send(response);
                }).catch(err => {
                    response.success = false;
                    response.message = "ERROR OCCURED";
                    response.error = err;
                    return res.status(400).send(response);
                });
        }
        catch (err) {
            return res.status(400).send(err);
        }
    }

    /**
    * @description update note data
    * @param {object} req user request 
    * @param {object} res response from server
    * @returns {object} res
    */
    update(req, res) {

        let response = {};
        try {
            req.body.userId = req.token._id;
            req.check("userId", " should not empty").notEmpty();
            req.check("_id", " should not empty").notEmpty();
            let error = req.validationErrors();
            if (error) {
                response.success = false;
                response.message = "error while validation";
                response.error = error;
                return res.status(422).send(response);
            }
            else {
                noteService.update(req.body)
                    .then(data => {
                        response.success = true;
                        response.message = "updated successfully";
                        response.data = data;
                        return res.status(200).send(response);
                    }).catch(err => {
                        response.success = false;
                        response.message = "ERROR OCCURED";
                        response.error = err;
                        return res.status(400).send(response);
                    });
            }
        } catch (err) {
            return res.status(400).send(err);
        }
    }

    /**
    * @description get All note data
    * @param {object} req user request 
    * @param {object} res response from server
    * @returns {object} res
    */
    getAll(req, res) {
        let response = {};

        req.query.userId = req.token._id;


        noteService.getAll(req.query)
            .then(data => {
                response.success = true;
                response.message = "get all note successfully";
                response.data = data;
                return res.status(200).send(response);
            }).catch(err => {
                response.success = false;
                response.message = "ERROR OCCURED";
                response.error = err;
                return res.status(400).send(response);
            });
    }

    /**
    * @description search data
    * @param {object} req user request 
    * @param {object} res response from server
    * @returns {object} res
    */
    searchNoteControl(req, res) {
        let response = {};
        try {
            req.query.userId = req.token._id;
            req.check("userId", " should not empty").notEmpty();
            req.check("searched", " should not empty").notEmpty();
            let error = req.validationErrors();
            if (error) {
                response.success = false;
                response.message = "error while validation";
                response.error = error;
                return res.status(422).send(response);
            }
            else {

                noteService.searchNoteService(req.query)
                    .then(data => {
                        response.success = true;
                        response.message = "searched successfully";
                        response.data = data;
                        return res.status(200).send(response);
                    }).catch(err => {
                        response.success = false;
                        response.message = "searched data not found";
                        response.error = err;
                        return res.status(400).send(response);
                    });
            }
        } catch (err) {
            return res.status(400).send(err);
        }
    }

    /**
    * @description add label on note data
    * @param {object} req user request 
    * @param {object} res response from server
    * @returns {object} res
    */
    addLabelOnNote(req, res) {
        let response = {};
        try {

            req.body.userId = req.token._id;
            req.check("_id", "id should not empty").notEmpty();
            req.check("label", "labelid should not empty").notEmpty();
            let error = req.validationErrors();
            if (error) {
                response.success = false;
                response.message = "error while validation";
                response.error = error;
                return res.status(422).send(response);
            }
            else {
                noteService.addLabelNote(req.body)
                    .then(data => {
                        response.success = true;
                        response.message = "label added on note successfully";
                        response.data = data;
                        return res.status(200).send(response);
                    }).catch(err => {
                        response.success = false;
                        response.message = "data not added";
                        response.error = err;
                        return res.status(400).send(response);
                    });
            }
        } catch (err) {
            return res.status(400).send(err);
        }
    }

    /**
    * @description delete label on note data
    * @param {object} req user request 
    * @param {object} res response from server
    * @returns {object} res
    */

    deleteLabelOnNote(req, res) {
        let response = {};
        try {
            req.body.userId = req.token._id;

            req.check("_id", "id should not empty").notEmpty();
            req.check("label", "labelid should not empty").notEmpty();
            let error = req.validationErrors();
            if (error) {
                response.success = false;
                response.message = "error while validation";
                response.error = error;
                return res.status(422).send(response);
            }
            else {

                noteService.deleteLabelNote(req.body)
                    .then(data => {
                        response.success = true;
                        response.message = "label delete on note successfully";
                        response.data = data;
                        return res.status(200).send(response);
                    }).catch(err => {
                        response.success = false;
                        response.message = "data not deleted";
                        response.error = err;
                        return res.status(400).send(response);
                    });
            }
        } catch (err) {
            return res.status(400).send(err);
        }
    }

    /**
    * @description reminder Notify in note
    * @param {object} req user request 
    * @param {object} res response from server
    * @returns {object} 
    */
    reminderNotify(userNotify) {
        let response = {};
        noteService.reminderNotify(userNotify)
            .then(data => {

            }).catch(err => {

            });

    }
}

let objectCtrl = new NoteCtrl();
module.exports = objectCtrl;