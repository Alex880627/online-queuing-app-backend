const mongoose = require("mongoose");

/* const favouriteServicesSchema = new mongoose.Schema({

}); */

const appointmentsSchema = new mongoose.Schema({
  serviceName: {
    type: String,
  },
  providerName: {
    type: String,
  },
  appointmentDate: {  //  Frontend should create this with new Date(blahblah)
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
  appointments: [appointmentsSchema],
  /* favourites: [favouriteServicesSchema], */
});

module.exports = {
  userSchema,
  appointmentsSchema,
  /* favouriteServicesSchema, */
};
