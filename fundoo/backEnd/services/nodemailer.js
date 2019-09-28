


module.exports = {
  sendmail(emailId, newToken) {
    console.log("send mail")

    return new Promise((resolve, reject) => {

      var nodemailer = require('nodemailer');
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'kajalc268@gmail.com',
          pass: 'kaju123456@'
        }
      });

      var mailOptions = {

        from: 'kajalc268@gmail.com',
        to: emailId,
        subject: 'Sending Email Successfully!!!',
        html: '<h1>click on link to for verification</h1><br><p>Click <a href="http://localhost:4000/#/resetPassword/' + newToken + '">here</a> to reset your password</p>'

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



