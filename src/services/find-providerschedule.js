const { WeeklySchedule, DailySchedule } = require('../models/provider-models');
const { promisifyQuery } = require('../services/promisify-service');

const getServiceWeeklySchedule = weeklyScheduleId =>
  promisifyQuery(WeeklySchedule, WeeklySchedule.findById, [weeklyScheduleId]);

const getDailySchedule = dailyScheduleId =>
  promisifyQuery(DailySchedule, DailySchedule.findById, [dailyScheduleId, 'monday tuesday wednesday thursday friday']);

module.exports = {
  getServiceWeeklySchedule,
  getDailySchedule,
};
