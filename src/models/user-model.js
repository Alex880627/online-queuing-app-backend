const mongoose = require('mongoose');
const { userSchema, appointmentsSchema } = require('../schemas/user-schema');

const User = mongoose.model('user', userSchema);
const Appointment = mongoose.model('appointment', appointmentsSchema);

module.exports =  {
  User,
  Appointment,
};