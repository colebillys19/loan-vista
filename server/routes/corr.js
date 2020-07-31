const fs = require('fs');

const getCorrespondence = (req, res) => {
  const jsonData = fs.readFileSync(
    'server/mockData/CORRESPONDENCE_MOCK_DATA.json',
  );
  const data = JSON.parse(jsonData);
  res.send(data);
};

module.exports = getCorrespondence;
