const { Provider, Service } = require('../models/provider-models');
const { promisifyQuery } = require('../services/promisify-service');

const findProvidersWithServices = providerType =>
  promisifyQuery(Provider, Provider.find, [{type: providerType}, 'companyname services']);

const getAllCompanyServicesInfo = serviceIdList =>
  promisifyQuery(Service, Service.find, [{_id: {$in: serviceIdList}}]);

module.exports = {
  findProvidersWithServices,
  getAllCompanyServicesInfo,
};
