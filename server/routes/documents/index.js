const fs = require('fs');

const { getTargetDocumentsData } = require('./helpers');

const getDocuments = (req, res) => {
  const jsonData = fs.readFileSync('server/mockData/DOCUMENTS_MOCK_DATA.json');
  const documentsData = JSON.parse(jsonData);

  const fetchParams = req.query;
  const targetDocumentsData = getTargetDocumentsData(
    documentsData,
    fetchParams,
  );

  setTimeout(() => {
    res.send({
      documentsData: targetDocumentsData,
      newFetchParams: fetchParams,
    });
  }, 500);
};

module.exports = getDocuments;
