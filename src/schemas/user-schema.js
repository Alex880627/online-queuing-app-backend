const mongoose = require("mongoose");

const appointmentsSchema = new mongoose.Schema({
  serviceName: {
    type: String,
  },
  providerName: {
    type: String,
  },
  appointmentDate: {
    type: Date,
  },
});

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true, trim: true},
  lastname: { type: String, required: true, trim: true },
  username: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  registerdate: { type: Date, default: Date.now },
  appointments: [],
});

module.exports = {
  userSchema,
  appointmentsSchema,
};
