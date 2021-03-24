const fs = require('fs');

const { getDateFromStr, getDateToStr } = require('../helpers');
const { getTargetCallsData } = require('./helpers');

const getCalls = (req, res, next) => {
  try {
    const {
      query: { loanNumber, ...fetchParams },
    } = req;

    const callsDataJson = fs.readFileSync(
      `server/mockData/LOAN_${loanNumber}/CALLS_DATA.json`,
    );
    const callsData = JSON.parse(callsDataJson);

    const targetCallsData = getTargetCallsData(callsData, fetchParams);

    fetchParams.dateFrom = fetchParams.dateFrom || getDateFromStr();
    fetchParams.dateTo = fetchParams.dateTo || getDateToStr();

    setTimeout(() => {
      res.send({ callsData: targetCallsData, params: fetchParams });
    }, 1000);
  } catch (error) {
    next(error);
  }
};

module.exports = getCalls;
