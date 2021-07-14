const fs = require('fs');

const { getPageData } = require('../helpers');
const { getTargetPaymentsData } = require('./helpers');

const getPayments = (req, res, next) => {
  try {
    const {
      query: { itemsPerPage, loanNumber, pageToFetch, ...fetchParams },
    } = req;

    const paymentsDataJson = fs.readFileSync(
      `server/mockData/LOAN_${loanNumber}/PAYMENTS_DATA.json`,
    );
    const paymentsData = JSON.parse(paymentsDataJson);

    const targetPaymentsData = getTargetPaymentsData(paymentsData, fetchParams);

    const { pageData, totalPages } = getPageData({
      data: targetPaymentsData,
      itemsPerPage: Number(itemsPerPage),
      pageToFetch: Number(pageToFetch),
    });

    setTimeout(() => {
      res.send({ pageData, params: fetchParams, totalPages });
    }, 1000);
  } catch (error) {
    next(error);
  }
};

module.exports = getPayments;
