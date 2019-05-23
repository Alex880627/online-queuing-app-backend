const { getServiceWeeklySchedule, getDailySchedule } = require('../services/find-providerschedule');

const getSchedule = (req, res) =>
  getServiceWeeklySchedule(req.body._id)
    .then(ez => Object.values(ez).map(az => getDailySchedule(az)))
    .catch(error => res.send(error));

module.exports = {
  getSchedule,
};
