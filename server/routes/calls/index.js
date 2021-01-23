const fs = require('fs');

const { getTargetCallsData } = require('./helpers');

const getCalls = (req, res) => {
  const fetchParams = req.query;

  const jsonData = fs.readFileSync(
    `server/mockData/${fetchParams.loanNumber}/CALLS_DATA.json`,
  );
  const callsData = JSON.parse(jsonData);

  const targetCallsData = getTargetCallsData(callsData, fetchParams);

  setTimeout(() => {
    res.send({ callsData: targetCallsData, newFetchParams: fetchParams });
  }, 500);
};

module.exports = getCalls;
