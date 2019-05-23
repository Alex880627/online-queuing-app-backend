const express = require("express");

const router = express.Router();

const userRegistration = require ('../controllers/reg-user-controller')
const loginUser = require ('../controllers/login-controller')
const providerRegistration = require('../controllers/reg-provider-controller')

router.post("/login", loginUser);
router.post("/user-registration", userRegistration);
router.post("/provider-registration", providerRegistration);

module.exports = router;