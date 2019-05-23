const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "illes.alexander88@gmail.com", //
    pass: process.env.GMAIL_PASS
  }
});

const sendRegistrationEmail = ( input, dataFromMongo )=> {
  const mailOptions = {
    from: "illes.alexander88@gmail.com",
    to: `${input.email}`,
    subject: "Successful registration!",
    html: `<h1 style="text-align:center">Dear ${
      dataFromMongo.username
    }!</h1><hr>
    <p style="text-align:center">Welcome on RESTfull IPA!</p>
    <p style="text-align:center">Please login with your e-mail address and password!</p>
    <p style="text-align:center">You can easily register your appointment, and if you have a service </br>this page will help you to track the users appointments.</p>`
  };
  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      return err;
    } else {
      return info;
    }
  });
};


module.exports = { sendRegistrationEmail }