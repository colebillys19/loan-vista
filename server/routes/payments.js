const fs = require('fs');

const getPayments = (req, res) => {
  const jsonData = fs.readFileSync('server/mockData/PAYMENTS_MOCK_DATA.json');
  const data = JSON.parse(jsonData);

  setTimeout(() => {
    res.send(data);
  }, 500);
};

module.exports = getPayments;
