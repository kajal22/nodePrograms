module.exports={useremail}
var nodemailer = require('nodemailer');

function nodemailers(emailId,callback){
   
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
  html: <p>TO change your password click on this <p>forget.html</p> to reset your password</p>
      
  
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    callback(error);
  } else {
    callback('Email sent: ' + info.response);
  }
});
}
