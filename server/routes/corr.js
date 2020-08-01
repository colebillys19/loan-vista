const fs = require('fs');

const getCorrespondence = (req, res) => {
  const jsonData = fs.readFileSync(
    'server/mockData/CORRESPONDENCE_MOCK_DATA.json',
  );
  const data = JSON.parse(jsonData);

  setTimeout(() => {
    res.send(data);
  }, 500);
};

module.exports = getCorrespondence;
