const fs = require('fs');

const { getTargetCallsData } = require('./helpers');

const getCalls = (req, res) => {
  const { loanNumber, ...fetchParams } = req.query;

  const jsonData = fs.readFileSync(
    `server/mockData/LOAN_${loanNumber}/CALLS_DATA.json`,
  );
  const callsData = JSON.parse(jsonData);

  const targetCallsData = getTargetCallsData(callsData, fetchParams);

  setTimeout(() => {
    res.send({ callsData: targetCallsData, newFetchParams: fetchParams });
  }, 500);
};

module.exports = getCalls;
