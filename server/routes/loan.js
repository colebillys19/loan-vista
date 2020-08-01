const loanData = require('../mockData/loanMockData');

const getLoanData = (req, res) => {
  setTimeout(() => {
    res.send(loanData);
  }, 500);
};

module.exports = getLoanData;
