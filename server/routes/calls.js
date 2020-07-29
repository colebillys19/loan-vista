const fs = require('fs');

const getCalls = async (req, res) => {
  const jsonData = fs.readFileSync('server/mockData/CALLS_MOCK_DATA.json');
  const data = JSON.parse(jsonData);
  res.send(data);
};

module.exports = getCalls;
