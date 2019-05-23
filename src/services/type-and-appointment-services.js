const { Provider } = require("../models/provider-models");
const { User } = require("../models/user-model");
const { Appointment } = require("../models/user-model");

const getTypeOfServices = () => {
  return new Promise((res, rej) => {
    Provider.distinct("type", (err, data) => {
      if (data !== []) {
        return res(data[0]);
      }
      err = {
        message: "No provider types!"
      };
      return rej(err);
    });
  });
};

const getAppointmentsOfUser = body => {
  return new Promise((res, rej) => {
    User.find({ email: body.email }, (err, data) => {
      if (data.length > 0) {
        Appointment.find(
          { _id : { $in : data[0].appointments } } ,
          (appointmentsErr, appointmentsData) => {
            if (appointmentsErr) {
              err = {
                message: "No appointment found!"
              };
              return rej(err);
            }
            return res(appointmentsData);
          }
        );
      } else {
        err = {
          message: "No appointment found!"
        };
        return rej(err);
      }
    });
  });
};

module.exports = {
  getTypeOfServices,
  getAppointmentsOfUser
};
