const { getTypeOfServices } = require('../services/type-and-appointment-services');
const { getAppointmentsOfUser } = require('../services/type-and-appointment-services');

const typeAndAppointmentsGetter = (req, res, next) => {
  const { body } = req;
  getTypeOfServices().then(data => res.types = data);
  getAppointmentsOfUser(body).then(data=> res.appointments = data).catch(err=> console.log(err));
  next();
}

module.exports = { typeAndAppointmentsGetter };