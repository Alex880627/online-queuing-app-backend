const mongoose = require('mongoose');
const { dailyScheduleSchema,
  weeklyScheduleSchema,
  serviceSchema,
  providerSchema, } = require('../schemas/provider-schemas');

const DailySchedule = mongoose.model('dailySchedule', dailyScheduleSchema);
const WeeklySchedule = mongoose.model('weeklySchedule', weeklyScheduleSchema);
const Service = mongoose.model('service', serviceSchema);
const Provider = mongoose.model('provider', providerSchema);

module.exports = {
  DailySchedule,
  WeeklySchedule,
  Service,
  Provider,
};
