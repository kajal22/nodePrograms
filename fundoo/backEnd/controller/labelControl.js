let labelService = require("../services/labelService")

class LabelControl {
    

    async makeLabelController(req, res) {
        try{
            console.log("request",req);
            
        let response = {};
        if (error) {
            response.success = false;
            response.message = "error while validation";
            response.error = error;
            return res.status(422).send(response);
        }
        else {
            let labetData = {
                "labelName":req.body.labelName,
                "userId":req.token._id
            };


            makeLabelResult=await labelService.makeLabelService(labetData)
                   if(makeLabelResult){
                        response.success = true;
                        response.message = "updated successfully";
                        response.data = data;
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
}

let controlObject = new LabelControl();
module.exports =controlObject;