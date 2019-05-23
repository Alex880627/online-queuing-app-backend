const express = require("express");

const router = express.Router();

const registration = require ('../controllers/reg-controller')
/* const loginUser = require ('../controllers/login-controller')

router.post("/login", loginUser); */
router.post("/registration", registration);

module.exports = router;