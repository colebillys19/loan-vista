const fs = require('fs');

const getCalls = (req, res) => {
  const jsonData = fs.readFileSync('../mockData/CALLS_MOCK_DATA.json');
  const data = JSON.parse(jsonData);
  res.send(data);
};

module.exports = getCalls;
