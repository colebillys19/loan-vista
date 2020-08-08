const fs = require('fs');

const getEmails = (req, res) => {
  const jsonData = fs.readFileSync('server/mockData/EMAILS_MOCK_DATA.json');
  const data = JSON.parse(jsonData);

  setTimeout(() => {
    res.send(data);
  }, 500);
};

module.exports = getEmails;
