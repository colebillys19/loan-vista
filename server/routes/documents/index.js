const fs = require('fs');

const { getTargetDocumentsData } = require('./helpers');

const getDocuments = (req, res) => {
  const fetchParams = req.query;

  const jsonData = fs.readFileSync(
    `server/mockData/${fetchParams.loanNumber}/DOCUMENTS_DATA.json`,
  );
  const documentsData = JSON.parse(jsonData);

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
