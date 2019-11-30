
/*************************************************************************

* Purpose          : fundoo
* @file            : server.js
* @author          : kajal choudhary
* @version         : 1.0
* @since           : 25-09-2019
* 
**************************************************************************/

const express = require("express");
const app = express();
const control = require("./controller/userControl");
const  noteControl=require("./controller/noteControl");
const config = require("./config/config");
let validator = require("express-validator");
const mongooseService=require("./services/mongooseService");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerFile=require("../backEnd/swagger/swagger.json");
app.use(bodyParser.json());
const routes = require("./routes/index");
var cors = require("cors");
app.use(cors());
app.use(validator()); 
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use("/", routes);

require("dotenv").config();
const logger=require("./logger");
var cron = require("node-cron");
/**
@description- prints the server run or not
**/

app.listen(config.PORT, function () {
    logger.info("Server is running on Port: " + config.PORT);
    mongooseService.mongooseConnection();
});

 
// cron.schedule("* * * * * *", () => {

// userNotify={
// userId:"5d973f03b7bb2e53bb101c72"
// };   
//     noteControl.reminderNotify(userNotify);
//   console.log("Runing a job at 01:00 at America/Sao_Paulo timezone");
// });

module.exports = app;