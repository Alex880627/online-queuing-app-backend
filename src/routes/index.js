const express = require("express");

const router = express.Router();

const { userRegistration } = require ('../controllers/reg-user-controller');
const { loginUser } = require ('../controllers/login-user-controller');
const { loginProvider } = require('../controllers/login-provider-controller');
const { providerRegistration } = require('../controllers/reg-provider-controller');
const { getProvidersAndServicesByType } = require('../controllers/servicegetter-controller');
const { typeAndAppointmentsGetter } = require('../middlewares/get-type-and-appointments');
const { getSchedule } = require('../controllers/schedulegetter-controller');

router.post("/login-user", typeAndAppointmentsGetter, loginUser);
router.post("/login-provider", loginProvider);
router.post("/user-registration", userRegistration);
router.post("/provider-registration", providerRegistration);
router.post("/selected-type", getProvidersAndServicesByType);
router.post("/provider-main", getSchedule); //  not working yet

module.exports = router;