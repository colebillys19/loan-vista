const loanMockData = require('../mockData/loanMockData');

const getLoanData = (req, res) => {
  setTimeout(() => {
    res.send(loanMockData);
  }, 500);
};

module.exports = getLoanData;
