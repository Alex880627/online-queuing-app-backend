const  { User } = require("../models/user-model");
const bcrypt = require('bcrypt');
const { sendRegistrationEmail } = require('./mail-services')

const userValidation = data => {
  return new Promise((resolve, reject) => {
    User.findOne({ username: data.username }, (nameErr, nameResult) => {
      if (nameResult === null) {
        User.findOne({ email: data.email }, (emailErr, emailResult) => {
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
          msg: "This username is already taken please choose another one!"
        };
        return reject(nameErr);
      }
    });
  });
};

regUserService = data => {
  return new Promise((resolve, reject) => {
  bcrypt.hash(data.password, 10, function(err, hash) {
    const user = new User({
      firstname: data.firstname,
      lastname: data.lastname,
      username: data.username,
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

module.exports = {
  userValidation,
  regUserService
};
