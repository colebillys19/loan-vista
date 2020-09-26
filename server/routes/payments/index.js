const fs = require('fs');

const { getTargetPaymentsData } = require('./helpers');

const getPayments = (req, res) => {
  const jsonData = fs.readFileSync('server/mockData/PAYMENTS_MOCK_DATA.json');
  const paymentsData = JSON.parse(jsonData);

  const fetchParams = req.query;
  const targetPaymentsData = getTargetPaymentsData(paymentsData, fetchParams);

  setTimeout(() => {
    res.send({
      paymentsData: targetPaymentsData,
      newFetchParams: fetchParams,
    });
  }, 500);
};

module.exports = getPayments;
