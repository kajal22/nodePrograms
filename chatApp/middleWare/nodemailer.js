
module.exports={
  sendmail(emailId,newToken,callback)
{
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
  subject: 'Sending Email using Node.js',
  html: '<h1>click on link to for verification</h1><br><p>Click <a href="http://localhost:4001/resetPassword/'+newToken+'">here</a> to reset your password</p>'
       
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    callback(error);
  } else {
    callback('Email sent: ' + info.response);
  }
});
}
}