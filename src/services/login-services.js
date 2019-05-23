const User = require("../models/user-model");
const { generateJwt } = require("./jwt-services");
const bcrypt = require("bcrypt");

const login = data => {
  return new Promise((resolve, reject) => {
    User.findOne({ email: data.email }, (nameErr, nameResult) => {
      if (nameResult !== null) {
        bcrypt.compare(data.password, nameResult.password, function(err, res) {
          if (res) {
            const token = generateJwt(data, nameResult);
            return resolve(token);
          } else {
            nameErr = {
              msg: "Invalid e-mail or password!"
            };
            return reject(nameErr);
          }
        });
      }
    });
  });
};

module.exports = { login };
