const Provider = require("../models/provider-model");
const bcrypt = require('bcrypt');
const { sendRegistrationEmail } = require('./mail-services')

const providerValidation = data => {
  return new Promise((resolve, reject) => {
    Provider.findOne({ companyname: data.companyname }, (nameErr, nameResult) => {
      if (nameResult === null) {
        Provider.findOne({ email: data.email }, (emailErr, emailResult) => {
          if (emailResult === null) {
            return resolve(data);
          } else {
            emailErr = {
              msg: "This e-mail is already taken please choose another one!"
            };
            return reject(emailErr);
          }
        });
      } else {
        nameErr = {
          msg: "This company name is already taken please choose another one!"
        };
        return reject(nameErr);
      }
    });
  });
};

regProviderService = data => {
  return new Promise((resolve, reject) => {
  bcrypt.hash(data.password, 10, function(err, hash) {
    const user = new Provider({
      companyname: data.companyname,
      password: hash,
      email: data.email
    });
      user.save((err, savedData) => {
        if (err) {
          err = {
            msg: 'Registration failed!'
          }
          return reject(err);
        }else{
          sendRegistrationEmail(data, savedData);
          return resolve(data);
        }
      });
    });
  });
};

module.exports = { providerValidation, regProviderService };