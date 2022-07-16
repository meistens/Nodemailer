const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
require('dotenv').config();
const port = process.env.PORT || 3000;


// nodemailer codeblock for gmail here
const transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
      type: 'OAuth2',
      user: process.env.tempMail,
      pass: process.env.tempPass,
      clientId: process.env.clientID,
      clientSecret: process.env.clientSecret,
      refreshToken: process.env.refreshToken
   },
   tls:{
      rejectUnauthorized: false
   }
});

let mailOptions = {
   from: 'mebodave@gmail.com',
   to: 'mebodave@gmail.com',
   subject: 'Test run 2',
   text: 'see this? means it works'
};

transporter.sendMail(mailOptions, (err, data) => {
if (err)
   throw Error(err);
   console.log(data);
});

// end


app.listen(port, () => {
   console.log(`listening on ${port}`)
});