const { getServiceWeeklySchedule, getDailySchedule } = require('../services/find-providerschedule');

const getSchedule = (req, res) =>
  getServiceWeeklySchedule(req.body._id)
    .then(weeklySchedule => Object.values(weeklySchedule).map(dailyScheduleId => getDailySchedule(dailyScheduleId)))
    .catch(error => res.send(error));

module.exports = {
  getSchedule,
};
