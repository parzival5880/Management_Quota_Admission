var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'luvpatel2001@gmail.com',
    pass: 'hlge fwvv ugbh fljr'
  }
});

var mailOptions = {
  from: 'luvpatel2001@gmail.com',
  to: 'entrepreneurdev1901@gamil.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>First Email</h1>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});