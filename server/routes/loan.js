const loanData = require('../mockData/loanMockData');

const getLoanData = (req, res) => {
  res.send(loanData);
};

module.exports = getLoanData;
