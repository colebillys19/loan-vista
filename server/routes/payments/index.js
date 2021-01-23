const fs = require('fs');

const { getTargetPaymentsData } = require('./helpers');

const getPayments = (req, res) => {
  const fetchParams = req.query;

  const jsonData = fs.readFileSync(
    `server/mockData/${fetchParams.loanNumber}/PAYMENTS_DATA.json`,
  );
  const paymentsData = JSON.parse(jsonData);
  const targetPaymentsData = getTargetPaymentsData(paymentsData, fetchParams);

  setTimeout(() => {
    res.send({
      newFetchParams: fetchParams,
      paymentsData: targetPaymentsData,
    });
  }, 500);
};

module.exports = getPayments;
