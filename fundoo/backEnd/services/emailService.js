
const config = require("../config/config");
const nodemailer = require("nodemailer");
class NodeMailer {

  sendmail(emailId, apiLink) {
    console.log("emailId", emailId);

    return new Promise((resolve, reject) => {
      var transporter = nodemailer.createTransport({
        service: config.service,
        auth: {
          user: config.user,
          pass: config.pass
        }
      });

      var mailOptions = {
        from: config.user,
        to: emailId,
        subject: " Email sent of fundooApp!!!",
        html: apiLink

      };

      transporter.sendMail(mailOptions, function (error) {
        if (error) {
          reject(error);
        } else {
          resolve("Email sent");
        }
      });
    });

  }

}
const mailObject = new NodeMailer;
module.exports = mailObject;

















