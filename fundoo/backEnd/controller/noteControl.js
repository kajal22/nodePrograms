
let noteService = require("../services/noteService")
class NoteCtrl {

    createNoteControl(req, res) {
        let response = {};
        try {

            req.body.userId = req.token._id;
            noteService.createNoteService(req.body)
                .then(data => {
                    response.success = true;
                    response.message = "create successfully"
                    response.data = data;
                    return res.status(200).send(response);
                }).catch(err => {
                    response.success = false;
                    response.message = "ERROR OCCURED";
                    return res.status(400).send(response);
                })

        } catch (err) {
            return res.status(400).send(err)
        }
    }

    deleteNoteControl(req, res) {  
        let response = {};
        try {
            let deleteData = {
                "_id": req.body._id
            }

            noteService.deleteNoteService(deleteData)
                .then(data => {
                    response.success = true;
                    response.message = "DELETED Successfully"
                    response.data = data;
                    return res.status(200).send(response);
                }).catch(err => {
                    response.success = false;
                    response.message = "ERROR OCCURED";
                    return res.status(400).send(response);
                })
        } catch (err) {
            return res.status(400).send(err)
        }
    }

    updateNoteControl(req,res){

        let response = {};
        try {
            req.body.userId = req.token._id;
           
            
        noteService.updateNoteService(req.body)
        .then(data => {
            response.success = true;
            response.message = "updated successfully"
            response.data = data;
            return res.status(200).send(response);
        }).catch(err => {
            response.success = false;
            response.message = "ERROR OCCURED";
            return res.status(400).send(response);
        })
    }catch(err)
    {
        return res.status(400).send(err)
    }
}


    getAllNoteControl(req,res){
       
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
                noteService.getAllNoteService(getAllData)
                    .then(data => {
                        response.success = true;
                        response.message = "get all note successfully"
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
let objectCtrl = new NoteCtrl();
module.exports = objectCtrl;