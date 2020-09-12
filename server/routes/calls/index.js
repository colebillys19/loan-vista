const fs = require('fs');

const { getTargetCallsData } = require('./helpers');

const getCalls = (req, res) => {
  const jsonData = fs.readFileSync('server/mockData/CALLS_MOCK_DATA.json');
  const callsData = JSON.parse(jsonData);

  const fetchParams = req.query;
  const targetCallsData = getTargetCallsData(callsData, fetchParams);

  setTimeout(() => {
    res.send({ callsData: targetCallsData, newFetchParams: fetchParams });
  }, 500);
};

module.exports = getCalls;
