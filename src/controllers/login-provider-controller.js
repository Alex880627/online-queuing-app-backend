const { loginAndAuth } = require("../services/login-services");
const { Provider } = require("../models/provider-models");

const loginProvider = (req, res) => {
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
    loginAndAuth(body, Provider)
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

module.exports = { loginProvider };
