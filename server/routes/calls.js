const fs = require('fs');

const getCalls = (req, res) => {
  const jsonData = fs.readFileSync('server/mockData/CALLS_MOCK_DATA.json');
  const data = JSON.parse(jsonData);

  setTimeout(() => {
    res.send(data);
  }, 500);
};

module.exports = getCalls;
