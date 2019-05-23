const {
  userValidation,
  regUserService
} = require("../services/reg-user-services");

const userRegistration= (req, res) => {
  const { body } = req;
  if (
    body.firstname === "" ||
    body.firstname === undefined ||
    (body.lastname === "" || body.lastname === undefined) ||
    (body.username === "" || body.username === undefined) ||
    (body.password === "" || body.password === undefined) ||
    (body.email === "" || body.email === undefined)
  ) {
    res.status(500).json({
      message: "You have to fill all the fields for registration"
    });
  } else if (body.email.includes("@") === false) {
    res.status(500).json({
      message: "Invalid e-mail address!"
    });
  } else if (body.password.length < 6) {
    res.status(500).json({
      message: "Password is too short! (minimum 6 characters)"
    });
  } else {
    userValidation(body)
      .then(data => regUserService(data))
      .then(() =>
        res.status(201).json({
          message: "Successful registration!"
        })
      )
      .catch(err =>
        res.status(500).json({
          message: err.msg
        })
      );
  }
};




module.exports = { userRegistration };
