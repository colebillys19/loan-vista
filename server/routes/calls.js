const fs = require('fs');

const getCalls = (req, res) => {
  const newFetchParams = req.query;

  const jsonData = fs.readFileSync('server/mockData/CALLS_MOCK_DATA.json');
  const callsData = JSON.parse(jsonData);

  setTimeout(() => {
    res.send({ callsData, newFetchParams });
  }, 500);
};

module.exports = getCalls;
