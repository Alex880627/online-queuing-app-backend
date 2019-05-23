const { generateJwt } = require("./jwt-services");
const bcrypt = require("bcrypt");

const loginAndAuth = (data, model) => {
  return new Promise((resolve, reject) => {
    model.findOne({ email: data.email }, (nameErr, nameResult) => {
      if (nameResult) {
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
      else {
        nameErr = {
          msg: "Invalid e-mail or password!"
        };
        return reject(nameErr);
      }
    });
  });
};

module.exports = { loginAndAuth };
