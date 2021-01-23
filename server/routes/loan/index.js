const fs = require('fs');

const { getRecentListData } = require('./helpers');

const getLoanData = (req, res) => {
  const { loanNumber } = req.query;

  const jsonData = fs.readFileSync(
    `server/mockData/LOAN_${loanNumber}/LOAN_DATA.json`,
  );

  const loanData = JSON.parse(jsonData);

  const { recentCalls, recentDocuments, recentPayments } = getRecentListData(
    loanNumber,
  );

  setTimeout(() => {
    res.send({
      loanData: { recentCalls, recentDocuments, recentPayments, ...loanData },
      loanNumber,
    });
  }, 500);
};

module.exports = getLoanData;
