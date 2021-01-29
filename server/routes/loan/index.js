const fs = require('fs');

const { getRecentListData } = require('./helpers');

const getLoanData = (req, res, next) => {
  try {
    const {
      query: { loanNumber },
    } = req;

    const loanDataJson = fs.readFileSync(
      `server/mockData/LOAN_${loanNumber}/LOAN_DATA.json`,
    );
    const loanData = JSON.parse(loanDataJson);

    const { recentCalls, recentDocuments, recentPayments } = getRecentListData(
      loanNumber,
    );

    setTimeout(() => {
      res.send({
        loanData: { recentCalls, recentDocuments, recentPayments, ...loanData },
        loanNumber,
      });
    }, 500);
  } catch (error) {
    next(error);
  }
};

module.exports = getLoanData;
