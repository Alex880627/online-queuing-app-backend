const { loginAndAuth } = require("../services/login-services");
const { User } = require("../models/user-model");

const loginUser = (req, res) => {
  const { body } = req;
  if (
    (body.password === "" ||
    body.password === undefined ) ||
    (body.email === "" || body.email === undefined)
  ) {
    res.status(500).json({
      message: "All the fields are required!"
    });
  } else if (body.email.includes("@") === false) {
    res.status(500).json({
      message: "Invalid e-mail addres!"
    });
  } else {
    loginAndAuth(body, User)
      .then(token =>
        res.status(201).json({
          message: "Succesful login!",
          token
        })
      )
      .catch(err =>  res.status(500).json({
        message: err.msg
      }))
  }
};

module.exports = { loginUser };
