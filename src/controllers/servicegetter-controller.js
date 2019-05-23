const { findProvidersWithServices, getAllCompanyServicesInfo } = require('../services/findservices-services');

const getProvidersAndServicesByType = (req, res) => {
  let queryResult = {
    companyname: '',
    services: [],
  }
  findProvidersWithServices(req.body.type).then(providerList =>
    providerList.map(provider => {queryResult.companyname = provider.companyname;
      getAllCompanyServicesInfo(provider.services)
        .then(allServicesOfCompany => {
          queryResult.services = allServicesOfCompany; res.status(200).json(queryResult)})
        .catch(queryError => res.status(400).send(queryError.message))})
  );
};

module.exports = {
  getProvidersAndServicesByType,
};
