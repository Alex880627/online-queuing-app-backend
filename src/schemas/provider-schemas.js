const mongoose = require("mongoose");

const dailyScheduleSchema = new mongoose.Schema({ //  Provider should fill this up using mongoose add key (Schema#add) SHOULD BE BOOLEAN WITH FALSE
  availableDay: {
    type: Boolean,
  },
});

const weeklyScheduleSchema = new mongoose.Schema({  //  dailySchema IDs come here
  monday: mongoose.Schema.ObjectId,
  tuesday: mongoose.Schema.ObjectId,
  wednesday: mongoose.Schema.ObjectId,
  thursday: mongoose.Schema.ObjectId,
  friday: mongoose.Schema.ObjectId,
});

const serviceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    maxlength: 40,
  },
  serviceDescription: {
    type: String,
    maxlength: 30,
  },
  weeklyScheduleId: {
    type: mongoose.Schema.ObjectId,
  }
});

const providerSchema = new mongoose.Schema({
  providerType: {
    type: String,
    enum: ['hairdresser', 'dentist', 'massage therapist', 'plastic surgeon'],
  },
  companyname: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  registerdate: { type: Date, default: Date.now },
  services: [],
});

module.exports = {
  dailyScheduleSchema,
  weeklyScheduleSchema,
  serviceSchema,
  providerSchema,
};
