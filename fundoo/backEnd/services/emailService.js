
const config=require('../config/config')
const nodemailer = require('nodemailer');
class NodeMailer{

  sendmail(emailId,apiLink,newToken) {
   
    return new Promise((resolve, reject) => { 
      var transporter = nodemailer.createTransport({
        service:config.service,
        auth: {
          user: config.user,
          pass: config.pass
        }
      });

      var mailOptions = {
        from: config.user,
        to: emailId,
        subject: 'Sending Email Successfully!!!',
        html:apiLink
        // html: '<h1>click on link to for verification</h1><br><p>Click <a href="http://localhost:4000/#/resetPassword/' + newToken + '">here</a> to reset your password</p>'

      };

      transporter.sendMail(mailOptions, function (error) {
        if (error) {
          reject(error);
        } else {
          resolve("Email sent");
        }
      });
    })

  }

}
const mailObject=new NodeMailer
module.exports=mailObject


















// module.exports = {
//     sendmail(emailId, newToken, callback) {
//       require('dotenv').config()
//       var nodemailer = require('nodemailer');
//       var transporter = nodemailer.createTransport({
//         service: process.env.service,
//         auth: {
//           user:process.env.user,
//           pass:process.env.pass
//         }
//       });

//       var mailOptions = {

//         from: process.env.user,
//         to: emailId,
//         subject: 'Sending Email Successfully!!!',
//         html: '<h1>click on link to for verification</h1><br><p>Click <a href="http://localhost:4000/#/resetPassword/' + newToken + '">here</a> to reset your password</p>'

//       };
//       transporter.sendMail(mailOptions, function (error) {
//         if (error) {
//   // console.log("erorr",error);
//           callback(error);
//         } else {

//           callback(null,"Email sent");
//         }
//       });
//     }
//   }



