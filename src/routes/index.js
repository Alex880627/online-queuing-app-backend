const express = require("express");

const router = express.Router();

const { userRegistration } = require ('../controllers/reg-user-controller')
const { loginUser } = require ('../controllers/login-user-controller')
const { loginProvider } = require('../controllers/login-provider-controller')
const { providerRegistration }= require('../controllers/reg-provider-controller')

router.post("/login-user", loginUser);
router.post("/login-provider", loginProvider);
router.post("/user-registration", userRegistration);
router.post("/provider-registration", providerRegistration);

module.exports = router;