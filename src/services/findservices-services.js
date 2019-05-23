const { Provider, Service } = require('../models/provider-models');

function promisifyQuery(dbModel, queryMethod, parametersList) {
  return new Promise((resolve, reject) => {
    parametersList.push((queryError, queryOutput) => {
      queryError ? reject(queryError) : resolve(queryOutput);
    });
    queryMethod.apply(dbModel, parametersList);
  });
};

const findProvidersWithServices = providerType =>
  promisifyQuery(Provider, Provider.find, [{type: providerType}, 'companyname services']);

const getAllCompanyServicesInfo = serviceIdList =>
  promisifyQuery(Service, Service.find, [{_id: {$in: serviceIdList}}]);

module.exports = {
  findProvidersWithServices,
  getAllCompanyServicesInfo,
};
