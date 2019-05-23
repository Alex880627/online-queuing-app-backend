const {
  providerValidation,
  regProviderService
} = require("../services/reg-provider-services");

const  providerRegistration = (req, res) => {
  const { body } = req;
  if (
    body.companyname === "" ||
    body.companyname === undefined ||
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
    providerValidation(body)
      .then(data => regProviderService(data))
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




module.exports = { providerRegistration };
