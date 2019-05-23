function promisifyQuery(dbModel, queryMethod, parametersList) {
  return new Promise((resolve, reject) => {
    parametersList.push((queryError, queryOutput) => {
      queryError ? reject(queryError) : resolve(queryOutput);
    });
    queryMethod.apply(dbModel, parametersList);
  });
};

module.exports = {
  promisifyQuery,
};
