const fs = require('fs');

const getDocuments = (req, res) => {
  const jsonData = fs.readFileSync('server/mockData/DOCUMENTS_MOCK_DATA.json');
  const data = JSON.parse(jsonData);

  setTimeout(() => {
    res.send(data);
  }, 500);
};

module.exports = getDocuments;
