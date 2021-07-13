const fs = require('fs');

const { getPageData } = require('../helpers');
const { getTargetCallsData } = require('./helpers');

const getCalls = (req, res, next) => {
  try {
    const {
      query: { itemsPerPage, loanNumber, pageToFetch, ...fetchParams },
    } = req;

    const callsDataJson = fs.readFileSync(
      `server/mockData/LOAN_${loanNumber}/CALLS_DATA.json`,
    );
    const callsData = JSON.parse(callsDataJson);

    const targetCallsData = getTargetCallsData(callsData, fetchParams);

    const { pageData, totalPages } = getPageData({
      data: targetCallsData,
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

module.exports = getCalls;
