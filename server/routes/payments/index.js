const fs = require('fs');

const { getTargetPaymentsData } = require('./helpers');

const getPayments = (req, res, next) => {
  try {
    const {
      query: { loanNumber, ...fetchParams },
    } = req;

    const paymentsDataJson = fs.readFileSync(
      `server/mockData/LOAN_${loanNumber}/PAYMENTS_DATA.json`,
    );
    const paymentsData = JSON.parse(paymentsDataJson);

    const targetPaymentsData = getTargetPaymentsData(paymentsData, fetchParams);

    setTimeout(() => {
      res.send({
        newFetchParams: fetchParams,
        paymentsData: targetPaymentsData,
      });
    }, 1000);
  } catch (error) {
    next(error);
  }
};

module.exports = getPayments;
